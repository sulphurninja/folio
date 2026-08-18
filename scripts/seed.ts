/**
 * Wipe demo issues and admin accounts.
 * Magazines are designed in code and sold per issue — not self-serve CMS.
 *
 * Run with: bun run seed
 */
import mongoose from "mongoose";
import { dbConnect } from "../src/lib/db";
import { User, Magazine } from "../src/models";

async function main() {
  console.log("Connecting…");
  await dbConnect();
  const [users, magazines] = await Promise.all([User.deleteMany({}), Magazine.deleteMany({})]);
  console.log(`Removed ${users.deletedCount} admin users and ${magazines.deletedCount} CMS issues.`);
  await mongoose.disconnect();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
