import React, { useEffect } from "react";
import { X, Calendar, User, Tag } from "lucide-react";
import { BlogPost } from "./Blogs";

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [post]);

  if (!post) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 scale-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 p-6 flex justify-between items-start z-10">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8">
            <div className="flex items-center gap-2">
              <User size={16} className="text-emerald-500" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-emerald-500" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-emerald-500" />
              <span>{post.category}</span>
            </div>
          </div>

          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-8 shadow-lg"
          />

          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-justify">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{post.author}</p>
                  <p className="text-sm text-slate-500">Licensed Professional Counselor</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;