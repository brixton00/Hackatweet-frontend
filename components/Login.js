export default function Login() {
  return (
    <div className="flex h-screen w-full bg-black overflow-hidden">
      <div className="login-image">
        <img src="/images/bg.png" alt="login" />
      </div>
      <div className="login-container">
        <img src="/images/logo.jpg" alt="logo" className="w-20" />
        <h1 className="text-6xl font-black mb-12 font-sans">
          See what's
          <br />
          happening
        </h1>
        <h2>Join Hackatweet today.</h2>
        <button className="px-4 py-2 m-2 bg-[#1D9BF0] text-white rounded-full cursor-pointer">
          Sign up
        </button>
        <div className="separator">Already have an account ?</div>
        <button className="px-4 py-2 m-2 text-white border rounded-full cursor-pointer">
          Sign in
        </button>
      </div>
    </div>
  );
}
