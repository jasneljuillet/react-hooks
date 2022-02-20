import Head from 'next/head'
import TodoList from '../components/todolist'

export default function Home() {
  return (
    <div className="bg-gray-400 flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>React Hooks.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20 text-center">
        <TodoList />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://jasnel.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'Copywrite'}
          <img src="/file.enc.jpg" alt="Jasnel Photo" className="h-4 ml-2 rounded-full" />
          {' Jasnel'}
        </a>
      </footer>
    </div>
  )
}
