import Logo from '../components/logo'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
     
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to{' '}
            <Logo/>
        </h1>

        <p className="mt-3 text-2xl">
          Currently Work in progress !
        </p>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{' '}
          Open Sauce Team
        </a>
      </footer>
    </div>
  )
}
