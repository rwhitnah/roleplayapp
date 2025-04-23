import type { FC } from "hono/jsx";
import { Layout } from "./layout.js";

export const Reset: FC = (props) => {
  return (
    <Layout user={props.user}>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center ml-5">
            <h1 class="text-5xl font-bold">Password Reset</h1>
            <p class="py-6">
              Password reset initiated for {props.user.email} 
            </p>
          </div>
          <div class="mx-auto card shrink-0 w-full max-w-sm shadow-2xl bg-primary border-secondary border-8">
          <form 
            class="card-body" 
            name="reset" 
            action="/reset" 
            method="post"
            >
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
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-secondary">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
