import { Card } from "@shared/ui/Card";
import { Icon } from "@shared/ui/Icon";
import { useState } from "react";
import { GiChatBubble, GiHeartOrgan, GiWaterRecycling } from "react-icons/gi";

const discordPosts = [
  {
    user: "AetherDev",
    avatar: "avatars/AetherDev.png",
    content: "New update coming soon! We're adding 4 new heroes to the roster.",
    time: "2 hours ago",
    likes: 42,
  },
  {
    user: "CommunityManager",
    avatar: "avatars/CommunityManager.png",
    content: "Join us this Friday for a live gameplay session!",
    time: "5 hours ago",
    likes: 28,
  },
  {
    user: "LeadDesigner",
    avatar: "avatars/LeadDesigner.png",
    content: "Check out the new biome concepts in the #art-showcase channel.",
    time: "1 day ago",
    likes: 56,
  },
];

const twitterPosts = [
  {
    user: "AetherRealms",
    handle: "@aetherrealms",
    avatar: "avatars/AetherRealms.png",
    content:
      "The Golden Knight now has a new ultimate ability! What do you think?",
    time: "3h",
    likes: "1.2K",
  },
  {
    user: "AetherRealms",
    handle: "@aetherrealms",
    avatar: "avatars/AetherRealms.png",
    content:
      "Thank you for 50K followers! More announcements coming this week.",
    time: "1d",
    likes: "3.4K",
  },
  {
    user: "AetherRealms",
    handle: "@aetherrealms",
    avatar: "avatars/AetherRealms.png",
    content:
      "Behind the scenes: How we create the magical atmosphere of Aether Realms.",
    time: "2d",
    likes: "892",
  },
];

export function CommunityFeedSection() {
  const [isLiked, setIsLiked] = useState({
    discord: Array(discordPosts.length).fill({ likes: false, reply: false }),
    twitter: Array(twitterPosts.length).fill({ likes: false, reply: false }),
  });
  return (
    <section className="bg-base-100 py-24! px-6! lg:px-40!" id="community">
      <div className="text-center mb-16! space-y-6!">
        <div className="flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-primary" />
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">
            Join the Community
          </span>
          <div className="h-1 w-12 bg-primary" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-base-content uppercase italic">
          Aether Community
        </h2>
        <p className="text-base-content/60 text-lg max-w-2xl mx-auto!">
          Connect with fellow players, share strategies, and stay updated on the
          latest news.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto!">
        <Card variant="elevated" padding="lg" className="space-y-6!">
          <div className="flex items-center gap-3 pb-4! border-b border-base-content/10">
            <Icon name="discord" size="lg" />
            <div>
              <h3 className="text-base-content font-black uppercase tracking-widest">
                Discord
              </h3>
              <p className="text-base-content/60 text-sm">Join 25K+ members</p>
            </div>
          </div>
          <div className="space-y-4!">
            {discordPosts.map((post, index) => (
              <div
                key={index}
                className="flex gap-3 p-3! rounded-lg bg-base-content/5 hover:bg-base-content/10 transition-colors"
              >
                <img
                  src={post.avatar}
                  alt={post.user}
                  className="w-10 h-10 rounded-full shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1!">
                    <span className="text-base-content font-bold text-sm">
                      {post.user}
                    </span>
                    <span className="text-base-content/60 text-xs">
                      {post.time}
                    </span>
                  </div>
                  <p className="text-base-content/30 text-sm">{post.content}</p>
                  <div className="flex items-center gap-4 mt-2!">
                    <button
                      className="group flex items-center gap-1 text-base-content/60 transition-colors text-xs hover:text-primary"
                      onClick={() => {
                        setIsLiked((prev) => ({
                          ...prev,
                          discord: prev.discord.map((v, i) =>
                            index == i ? ({ ...v, likes: !v.likes }) : v,
                          ),
                        }));
                      }}
                    >
                      <GiHeartOrgan
                        className={`text-2xl transition-all duration-700 cursor-pointer ${
                          isLiked.discord[index].likes
                            ? "text-red-500 scale-110 animate-bounce"
                            : "group-hover:text-red-400"
                        }`}
                      />
                      {isLiked.discord[index]. likes ? post.likes + 1 : post.likes}
                    </button>
                    <button
                        className="group flex items-center gap-1 text-base-content/60 hover:text-primary transition-colors text-xs"
                        onClick={() => {
                          setIsLiked((prev) => ({
                            ...prev,
                            discord: prev.discord.map((v, i) =>
                              index == i ? { ...v, reply: !v.reply } : v,
                            ),
                          }));
                        }}
                      >
                        <GiWaterRecycling
                          name="chat"
                          className={`text-lg transition-all duration-700 ${
                            isLiked.discord[index].reply
                              ? "text-gold scale-110 animate-[spin_1.5s_linear]"
                              : "group-hover:text-gold/70"
                          }`}
                        />
                        Reply
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="elevated" padding="lg" className="space-y-6!">
          <div className="flex items-center gap-3 pb-4! border-b border-base-content/10">
            <Icon name="twitter" size="lg" />
            <div>
              <h3 className="text-base-content font-black uppercase tracking-widest">
                Twitter / X
              </h3>
              <p className="text-base-content/60 text-sm">
                Follow @aetherrealms
              </p>
            </div>
          </div>
          <div className="space-y-4!">
            {twitterPosts.map((post, index) => (
              <div
                key={index}
                className="p-3! rounded-lg bg-base-content/5 hover:bg-base-content/10 transition-colors"
              >
                <div className="flex gap-3">
                  <img
                    src={post.avatar}
                    alt={post.user}
                    className="w-10 h-10 rounded-full shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1!">
                      <span className="text-base-content font-bold text-sm">
                        {post.user}
                      </span>
                      <span className="text-base-content/60 text-xs">
                        {post.handle}
                      </span>
                      <span className="text-base-content/60 text-xs">
                        · {post.time}
                      </span>
                    </div>
                    <p className="text-base-content/30 text-sm">
                      {post.content}
                    </p>
                    <div className="flex items-center gap-4 mt-2!">
                      <button
                        className="group flex items-center gap-1 text-base-content/60 hover:text-primary transition-colors text-xs"
                        onClick={() => {
                          setIsLiked((prev) => ({
                            ...prev,
                            twitter: prev.twitter.map((v, i) =>
                              index == i ? { ...v, likes: !v.likes } : v,
                            ),
                          }));
                        }}
                      >
                        <GiHeartOrgan
                          className={`text-2xl transition-all duration-700 cursor-pointer ${
                            isLiked.twitter[index].likes
                              ? "text-red-500 scale-110 animate-bounce"
                              : "group-hover:text-red-400"
                          }`}
                        />
                        {isLiked.twitter[index].likes
                          ? post.likes.includes("K")
                            ? post.likes
                            : Number(post.likes) + 1
                          : post.likes}
                      </button>
                      <button
                        className="group flex items-center gap-1 text-base-content/60 hover:text-primary transition-colors text-xs"
                        onClick={() => {
                          setIsLiked((prev) => ({
                            ...prev,
                            twitter: prev.twitter.map((v, i) =>
                              index == i ? { ...v, reply: !v.reply } : v,
                            ),
                          }));
                        }}
                      >
                        <GiWaterRecycling
                          name="chat"
                          className={`text-lg transition-all duration-700 ${
                            isLiked.twitter[index].reply
                              ? "text-gold scale-110 animate-[spin_1.5s_linear]"
                              : "group-hover:text-gold/70"
                          }`}
                        />
                        Reply
                      </button>
                      <button className="flex items-center gap-1 text-base-content/60 hover:text-primary transition-colors text-xs">
                        <GiChatBubble name="chat" className="text-lg" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
