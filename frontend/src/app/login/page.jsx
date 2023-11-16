export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-emerald-600">
      <div className="flex flex-col w-full max-w-sm gap-6 p-6 bg-white rounded-lg">
        <h3 className="mx-auto text-2xl font-bold text-center text-transparent bg-gradient-to-r from-emerald-500 to to-blue-500 bg-clip-text w-fit">
          Login <i class="fa-solid fa-right-to-bracket"></i>
        </h3>
        <div className="space-y-3">
          <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" type="text" placeholder="Enter Your Email" />
          <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" type="password" placeholder="Enter Your Password" />
        </div>
        <button className="py-2 text-white rounded-md bg-emerald-600 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500">Login</button>
      </div>
    </div>
  );
}
