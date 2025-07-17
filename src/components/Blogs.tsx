import React, { useState } from "react";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import BlogModal from "./BlogModal";

// Define the type for a blog post
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Anxiety: A Guide to Finding Calm",
    excerpt: "Anxiety is a common human experience, but when it becomes overwhelming, it can impact your daily life. Learn practical strategies to manage anxiety symptoms effectively.",
    content: `Anxiety is a common human experience, but when it becomes overwhelming, it can impact your daily life. This comprehensive guide explores the roots of anxiety and offers practical strategies to manage its symptoms effectively.

Understanding your triggers is the first step toward managing anxiety. Keeping a journal can help you identify patterns in your thoughts and behaviors. From there, you can begin to challenge negative thought patterns and replace them with more balanced perspectives.

Mindfulness techniques have proven to be particularly effective in managing anxiety. Simple breathing exercises, progressive muscle relaxation, and grounding techniques can help you stay present and calm during anxious moments.

Cognitive-behavioral strategies focus on identifying and changing negative thought patterns that contribute to anxiety. By recognizing these patterns, you can learn to respond to anxious thoughts in a more balanced way.

Lifestyle adjustments play a crucial role in anxiety management. Regular exercise, adequate sleep, and a balanced diet can significantly impact your mental health. Additionally, limiting caffeine and alcohol consumption can help reduce anxiety symptoms.

Remember, seeking professional help is a sign of strength, not weakness. A qualified therapist can provide personalized strategies and support to help you manage anxiety effectively.`,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop",
    author: "Sajeewan Priyantha",
    date: "July 22, 2025",
    category: "Mental Health"
  },
  {
    id: 2,
    title: "The Power of Mindfulness in Daily Life",
    excerpt: "Mindfulness is more than just a buzzword; it's a powerful tool for mental clarity and emotional regulation. Discover how to integrate simple mindfulness practices into your routine.",
    content: `Mindfulness is the practice of being present and fully engaged with whatever we're doing at the moment — free from distraction or judgment. This article provides a comprehensive guide to incorporating mindfulness into your daily life.

The benefits of mindfulness are numerous and scientifically proven. Regular practice can lead to reduced stress, improved focus, better emotional regulation, and a greater sense of overall well-being. Research shows that mindfulness can even create positive changes in brain structure and function.

Starting with simple breathing exercises is often the most accessible way to begin a mindfulness practice. Find a comfortable position, close your eyes, and focus on your breath. When your mind wanders, gently bring your attention back to your breathing without judgment.

Mindful eating is another powerful practice. Instead of rushing through meals, take time to notice the colors, textures, and flavors of your food. This not only enhances your enjoyment of meals but also helps with digestion and portion control.

Walking meditation combines movement with mindfulness. As you walk, focus on the sensation of your feet touching the ground, the rhythm of your steps, and the environment around you. This practice can be particularly helpful for those who find sitting meditation challenging.

Body scan meditation involves systematically focusing on different parts of your body, noticing any sensations without trying to change them. This practice can help you become more aware of physical tension and stress.

Start with just five minutes a day, and gradually increase the duration as you become more comfortable with the practice. Remember, the goal isn't to empty your mind but to observe your thoughts and feelings without judgment.`,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    author: "Sajeewan Priyantha",
    date: "July 15, 2025",
    category: "Mindfulness"
  },
  {
    id: 3,
    title: "Navigating Grief: Healthy Ways to Cope with Loss",
    excerpt: "Loss is an inevitable part of life, but the grieving process can feel isolating. This guide discusses the stages of grief and provides healthy coping mechanisms to help you heal.",
    content: `Grief is a natural response to loss. It's the emotional suffering you feel when something or someone you love is taken away. While the grieving process is unique to everyone, understanding its potential stages can provide comfort and guidance during difficult times.

The five stages of grief, as identified by Elisabeth Kübler-Ross, include denial, anger, bargaining, depression, and acceptance. It's important to note that these stages don't necessarily occur in order, and not everyone experiences all of them. Grief is a deeply personal journey with no set timeline.

Denial often serves as a protective mechanism, allowing you to process the reality of loss gradually. It's normal to feel shocked or numb initially. Allow yourself to move through this stage at your own pace.

Anger is a natural part of grief. You might feel angry at the person who died, at yourself, at others, or at the situation. These feelings are valid and should be expressed in healthy ways, such as through journaling, exercise, or talking with a trusted friend or counselor.

Bargaining often involves "what if" or "if only" thoughts. You might find yourself making deals with a higher power or dwelling on what could have been done differently. This stage represents the difficulty in accepting the reality of the loss.

Depression in grief is different from clinical depression. It's a natural response to loss and involves deep sadness, withdrawal, and overwhelming emotions. While painful, this stage is an important part of the healing process.

Acceptance doesn't mean you're "over" the loss or that you'll never feel sad about it again. Instead, it means you've come to terms with the reality of the loss and are ready to move forward while keeping the memory of what you've lost alive.

Healthy coping strategies include allowing yourself to feel the pain, seeking support from others, maintaining routines, taking care of your physical health, and finding ways to honor the memory of what you've lost. Professional counseling can be invaluable during the grieving process.

Remember, there is no "right" way to grieve. Be patient with yourself, and know that healing takes time. Everyone's grief journey is unique, and it's important to honor your own process.`,
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop",
    author: "Sajeewan Priyantha",
    date: "July 08, 2025",
    category: "Grief & Loss"
  },
  {
    id: 4,
    title: "Building Resilience: Strategies for Life's Challenges",
    excerpt: "Resilience is the ability to bounce back from adversity. Learn practical strategies to build your resilience and navigate life's challenges with greater strength and confidence.",
    content: `Resilience is the ability to adapt and bounce back from adversity, trauma, tragedy, or stress. It's not about avoiding difficulties but rather learning how to navigate them effectively. The good news is that resilience can be developed and strengthened over time.

Building strong relationships is fundamental to resilience. Having supportive people in your life provides emotional support, practical help, and different perspectives during challenging times. Invest in your relationships and don't hesitate to reach out for support when needed.

Developing a positive mindset doesn't mean ignoring problems or pretending everything is fine. Instead, it involves focusing on what you can control, looking for opportunities for growth, and maintaining hope for the future. Practice gratitude regularly by acknowledging the good things in your life, no matter how small.

Self-care is crucial for building resilience. This includes taking care of your physical health through regular exercise, adequate sleep, and proper nutrition. Mental and emotional self-care involves managing stress, practicing relaxation techniques, and engaging in activities that bring you joy and fulfillment.

Problem-solving skills are essential for resilience. When faced with challenges, break them down into manageable steps, consider multiple solutions, and take action. Learn from both successes and failures, and view setbacks as opportunities for growth rather than as failures.

Flexibility and adaptability are key components of resilience. Life rarely goes according to plan, and being able to adjust your expectations and approach when circumstances change is crucial. Practice accepting what you cannot control while focusing your energy on what you can influence.

Finding meaning and purpose in life can provide strength during difficult times. This might involve your career, relationships, spirituality, or contributing to causes you care about. Having a sense of purpose can help you persevere through challenges and maintain hope for the future.

Remember, building resilience is a gradual process. Be patient with yourself and celebrate small victories along the way. With time and practice, you can develop the inner strength to navigate life's challenges with greater confidence and peace of mind.`,
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop",
    author: "Sajeewan Priyantha",
    date: "July 01, 2025",
    category: "Personal Growth"
  },
  {
    id: 5,
    title: "The Importance of Self-Care in Mental Health",
    excerpt: "Self-care isn't selfish—it's essential for maintaining good mental health. Discover practical self-care strategies that can be easily integrated into your daily routine.",
    content: `Self-care is often misunderstood as being selfish or indulgent, but it's actually a fundamental aspect of maintaining good mental health. Taking care of yourself enables you to better care for others and handle life's challenges more effectively.

Physical self-care forms the foundation of overall well-being. This includes getting adequate sleep, eating nutritious meals, staying hydrated, and engaging in regular physical activity. These basic needs significantly impact your mood, energy levels, and ability to cope with stress.

Emotional self-care involves acknowledging and processing your feelings in healthy ways. This might include journaling, talking with friends or a therapist, practicing mindfulness, or engaging in creative activities. Learning to identify and express your emotions is crucial for mental health.

Mental self-care focuses on activities that stimulate your mind and reduce mental fatigue. This could include reading, learning new skills, solving puzzles, or engaging in meaningful conversations. It's also important to set boundaries with information consumption, especially news and social media.

Social self-care involves nurturing relationships and maintaining social connections. This includes spending time with people who support and energize you, setting boundaries with toxic relationships, and seeking help when needed. Remember that it's okay to say no to social obligations when you need time for yourself.

Spiritual self-care doesn't necessarily involve religion but rather connecting with something greater than yourself. This might include meditation, spending time in nature, practicing gratitude, or exploring your values and beliefs. Find what brings you a sense of peace and meaning.

Setting boundaries is a crucial aspect of self-care. This includes learning to say no to requests that drain your energy, setting limits on work hours, and protecting your time and space. Boundaries help prevent burnout and maintain your emotional well-being.

Creating a self-care routine doesn't have to be complicated or time-consuming. Start with small, manageable activities that you can incorporate into your daily life. The key is consistency rather than perfection. Even five minutes of self-care each day can make a significant difference in your overall well-being.

Remember, self-care is not a luxury—it's a necessity. By taking care of yourself, you're better equipped to handle life's challenges, maintain healthy relationships, and pursue your goals with energy and enthusiasm.`,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    author: "Sajeewan Priyantha",
    date: "June 25, 2025",
    category: "Self-Care"
  },
  {
    id: 6,
    title: "Communication Skills for Healthier Relationships",
    excerpt: "Effective communication is the cornerstone of healthy relationships. Learn essential communication skills that can improve your personal and professional relationships.",
    content: `Effective communication is the foundation of all healthy relationships, whether personal or professional. Good communication skills can help prevent misunderstandings, resolve conflicts, and strengthen emotional bonds with others.

Active listening is perhaps the most important communication skill. This involves giving your full attention to the speaker, avoiding interruptions, and showing that you're engaged through body language and verbal responses. Practice reflecting back what you've heard to ensure understanding.

Using "I" statements instead of "you" statements can help prevent defensiveness and blame. For example, instead of saying "You never listen to me," try "I feel unheard when our conversations are interrupted." This approach focuses on your feelings rather than attacking the other person's character.

Emotional intelligence plays a crucial role in communication. This involves being aware of your own emotions and those of others, managing your reactions, and responding appropriately. Take time to understand your emotional triggers and practice managing them effectively.

Non-verbal communication often speaks louder than words. Pay attention to your body language, facial expressions, and tone of voice. Maintain eye contact, use open body language, and ensure your non-verbal cues align with your verbal message.

Empathy is essential for effective communication. Try to understand the other person's perspective, even if you disagree with their viewpoint. Ask questions to gain clarity and show genuine interest in their thoughts and feelings.

Conflict resolution skills are vital for maintaining healthy relationships. When disagreements arise, focus on the issue at hand rather than bringing up past grievances. Use calm, respectful language and work together to find mutually acceptable solutions.

Setting clear boundaries and expectations in relationships helps prevent misunderstandings. Communicate your needs, limits, and expectations clearly and respectfully. Be willing to negotiate and compromise when appropriate.

Practice patience and timing in your communications. Choose appropriate times and settings for important conversations. Avoid having serious discussions when emotions are running high or when either party is stressed or distracted.

Remember that communication is a skill that can be developed with practice. Be patient with yourself and others as you work to improve your communication abilities. The effort you put into developing these skills will pay dividends in all areas of your life.`,
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
    author: "Sajeewan Priyantha",
    date: "June 18, 2025",
    category: "Relationships"
  }
];

const Blogs = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <section id="blog" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Insights & Articles
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore topics on mental health, personal growth, and well-being to support your journey toward healing and happiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 border border-white/50 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 line-clamp-2 h-14">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3 h-20">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-emerald-500" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-emerald-500" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => openModal(post)}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <BookOpen size={18} />
                    Read More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <BlogModal post={selectedPost} onClose={closeModal} />
    </>
  );
};

export default Blogs;