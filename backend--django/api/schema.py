

import graphene
from graphene_django import DjangoObjectType, DjangoListField
from .models import Tree, User

class userType(DjangoObjectType):
    class Meta:
        model = User
        field = "__all__"

class treeType(DjangoObjectType):
    class Meta:
        model = Tree
        field = "__all__"


class Query(graphene.ObjectType):
    all_users = graphene.List(userType)
    one_user = graphene.Field(userType, user_id= graphene.Int())
    all_tress = graphene.List(treeType)
    tree = graphene.Field(treeType, tree_id=graphene.Int())

    def resolve_all_users(self, info, **kwargs):
        return User.objects.all()

    def resolve_user(self, info, user_id):
        return User.objects.get(pk=user_id)

    def resolve_all_tress(self, info, **kwargs):
        return Tree.objects.all()

    def resolve_tree(self, info, tree_id):
        return Tree.objects.get(pk=tree_id)

class UserInput(graphene.InputObjectType):
    id = graphene.ID()
    discord_id = graphene.String()
    discord_tag =  graphene.String()
    avatar = graphene.String()
    status = graphene.Boolean()
    xp = graphene.Int()
    coins = graphene.Int()
    tress_unlocked = graphene.List(graphene.Int)

class TreeInput(graphene.InputObjectType):
    id = graphene.ID()
    tree_id = graphene.Int()
    tree_name = graphene.String()
    tree_url = graphene.String()
    price = graphene.Int()
    xp_plant = graphene.Int()
    time_plant = graphene.Int()
    version_level = graphene.String()

class DeleteTree(graphene.Mutation):
    class Arguements:
        id = graphene.ID()

    tree = graphene.Field(treeType)

        
    def mutate(root, info , id):
         tree_instance = Tree.objects.get(pk = id)
         tree_instance.delete()

         return None


class DeleteUser(graphene.Mutation):
    class Arguements:
        id = graphene.ID()

    user = graphene.Field(userType)

    def mutate(root, info , id):
        user_instance = User.objects.get(pk=id)
        user_instance.delete()

        return None

class CreateTree(graphene.Mutation):
    class Arguments:
        tree_data = TreeInput(required=True)
    

    tree = graphene.Field(treeType)

    @staticmethod
    def mutate(root, info, tree_data=None):
        tree_instance = Tree( 
            tree_id = tree_data.tree_id,
            tree_name = tree_data.tree_name,
            tree_url = tree_data.tree_url,
            price = tree_data.price,
            xp_plant = tree_data.xp_plant,
            time_plant = tree_data.time_plant,
            version_level = tree_data.version_level,
        )
        tree_instance.save()
        return CreateUser(tree=tree_instance)

class CreateUser(graphene.Mutation):
    class Arguments:
        user_data = UserInput(required=True)

    user = graphene.Field(userType)

    @staticmethod
    def mutate(root, info, user_data=None):
        user_instance = User( 
            discord_id= user_data.discord_id,
            discord_tag = user_data.discord_tag,
            avatar = user_data.avatar,
            status = user_data.status,
            xp = user_data.xp,
            coins = user_data.coins
            

        )
        
        user_instance.save()
        for i in user_data.tress_unlocked:
            user_instance.tress_unlocked.add(i)
        return CreateUser(user=user_instance)



class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    delete_user = DeleteUser.Field()
    create_tree = CreateTree.Field()
    delete_tree = DeleteTree.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)







