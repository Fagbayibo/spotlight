import {v} from "convex/values";
import {mutation} from "./_generated/server";

// Create a new task with the given text
export const createUser = mutation({
  args: {
    username: v.string(),
    fullname: v.string(),
    email: v.string(),
    bio: v.optional(v.string()),
    image: v.string(),
    clerkId: v.string(),
  },

  handler: async (ctx, args) => {
    //Query for existingUser
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();
    //    do noting if user exist but creatte user whne user does not exist
    if (existingUser) return;
    // creating a user in DB
    await ctx.db.insert("users", {
      username: args.username,
      fullname: args.fullname,
      email: args.email,
      bio: args.bio,
      image: args.image,
      clerkId: args.clerkId,
      followers: 0,
      followings: 0,
      posts: 0,
    });
  },
});
