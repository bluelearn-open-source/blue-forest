
import graphene
from graphene_django import DjangoObjectType, DjangoListField
from .models import User

class userType(DjangoObjectType):
    class Meta:
        model = User
        field = "__all__"



class Query(graphene.ObjectType):
    all_users = graphene.List(userType)
    one_user = graphene.Field(userType, user_id= graphene.Int())

    def resolve_all_users(self, info, **kwargs):
        return User.objects.all()

    def resolve_user(self, info, user_id):
        return User.objects.get(pk=user_id)

class UserInput(graphene.InputObjectType):
    id = graphene.ID()
    discord_id = graphene.Int()
    discord_tag =  graphene.String()
    avatar = graphene.String()
    status = graphene.Boolean()
    xp = graphene.Int()
    coins = graphene.Int()
    tress_unlocked = graphene.List(graphene.Int)

class CreateUser(graphene.Mutation):
    class Arguements:
        user_data = UserInput(required = True )
    
    user = graphene.Field(userType)

    @staticmethod
    def mutate(root, info , user_data = None):
        user_instance = User(
            discord_id= user_data.discord_id,
            discord_tag = user_data.discord_tag,
            avatar = user_data.avatar,
            status = user_data.status,
            xp = user_data.xp,
            coins = user_data.coins,
            tress_unlocked = user_data.tress_unlocked

        )

        user_instance.save()
        return CreateUser(user=user_instance)

class DeleteUser(graphene.Mutation):
    class Arguements:
        id = graphene.ID()

        user = graphene.Field(userType)

        @staticmethod
        def mutate(root, info , id):
            user_instance = User.objects.get(pk = id)
            user_instance.delete()

            return None


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    delete_user = DeleteUser.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)







