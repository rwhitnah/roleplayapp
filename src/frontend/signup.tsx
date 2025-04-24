import type { FC } from "hono/jsx";
import { Layout } from "./layout.js";

export const Signup: FC = (props) => {
  return (
    <Layout user={props.user} characters={props.characters}>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center ml-5">
            <h1 class="text-5xl font-bold">Sign up now!</h1>
            <p class="py-6">
              Registered users can access player-specific features, such as character sheets, character registration, ticket systems, and more. 
            </p>
          </div>
          <div class="mx-auto card shrink-0 w-full max-w-sm shadow-2xl bg-primary border-secondary border-8">
          <form
              name="signup"
              action="/signup"
              method="post"
              class="card-body"
            >
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold text-lg">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  required
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold text-lg">First Name</span>
                </label>
                <input
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  required
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold text-lg">Last Name</span>
                </label>
                <input
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  required
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold text-lg">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  required
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <a href="/login" class="label-text-alt link link-hover font-bold text-md">
                    Or login here!
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-secondary">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
