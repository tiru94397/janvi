import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FloatingMusicPlayer } from './FloatingMusicPlayer';
import { Heart, Book, Calendar, User, Award, Star, Camera, PenTool } from 'lucide-react';
import photo1 from 'figma:asset/5f58dde1797423c617672eaa204dc7d7edf3c0ad.png';
import photo2 from 'figma:asset/8d22ff8189c95460a7d92558874605dadab73502.png';
import photo3 from 'figma:asset/5006de8cb4498062ded19174be2b83be4d8ca454.png';
import photo4 from 'figma:asset/1ad36aa3812ccaaa71047978dbcd9b1e62ee6805.png';
import bookPoster from 'figma:asset/a70f47921514e261193f3b5abc100245b41c6cc3.png';

interface BirthdayTemplateProps {
  name: string;
  date: string;
  age: number;
  favoritePerson: string;
  favoriteColor: string;
  hobby: string;
  favoriteBook: string;
  authoredBook: string;
  fromFriend: string;
}

export function BirthdayTemplate({
  name,
  date,
  age,
  favoritePerson,
  favoriteColor,
  hobby,
  favoriteBook,
  authoredBook,
  fromFriend
}: BirthdayTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100 p-6 flex items-center justify-center relative">
      <FloatingMusicPlayer autoPlay={true} />
      <div className="max-w-4xl w-full space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent mb-2">
              Happy Birthday!
            </h1>
            <div className="h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              {name}
            </h2>
            <div className="flex items-center justify-center gap-4 text-xl text-pink-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Turning {age}!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section - Real photos */}
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              <Camera className="w-6 h-6 text-pink-600" />
              Our Beautiful Memories
            </h3>
            <p className="text-gray-600 mt-2">Special moments we've shared together ✨</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={photo1} 
                alt="Beautiful memory together" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={photo2} 
                alt="Beautiful memory together" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={photo3} 
                alt="Beautiful memory together" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={photo4} 
                alt="Beautiful memory together" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-pink-600 italic">
              Super heroes in disguise, best friends for life! 🦸‍♀️💕
            </p>
          </div>
        </Card>

        {/* Book Poster Showcase */}
        <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-pink-200 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              <Book className="w-8 h-8 text-pink-600" />
              Published Masterpiece
            </h3>
            <p className="text-gray-600 mt-2">Celebrating your incredible literary achievement!</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Book Poster Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-64 h-80 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={bookPoster} 
                  alt="Unbreakable Ties Book Poster" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Book Details */}
            <div className="flex-1 space-y-4">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">"{authoredBook}"</h4>
                <p className="text-lg text-pink-600 mb-4">by {name}</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A testament to your incredible talent and creativity! Your book has touched so many hearts 
                  and showcases your amazing ability to weave stories that resonate with readers. You've 
                  accomplished something truly remarkable at such a young age!
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                    📖 Bestseller
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 border-pink-200">
                    ✨ Popular
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                    🏆 Young Author
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Achievements & Career */}
          <div className="space-y-6">
            {/* Author Achievement */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-pink-100 rounded-full">
                  <PenTool className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Published Author</h3>
              </div>
              <p className="text-lg text-gray-700 mb-2">Author of the popular book:</p>
              <p className="text-xl font-semibold text-pink-700 italic">"{authoredBook}"</p>
              <p className="text-sm text-gray-600 mt-2">A testament to your incredible writing talent!</p>
            </Card>

            {/* Career & Talent */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-pink-100 rounded-full">
                  <Award className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Talented & Focused</h3>
              </div>
              <p className="text-lg text-gray-700">
                You are incredibly talented and so serious about your career. Your dedication and determination inspire everyone around you!
              </p>
            </Card>
          </div>

          {/* Right Side - Personal Details */}
          <div className="space-y-6">
            {/* Favorite Person */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-pink-100 rounded-full">
                  <Heart className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Favorite Person</h3>
              </div>
              <p className="text-lg text-gray-700">{favoritePerson}</p>
            </Card>

            {/* Hobby */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-pink-100 rounded-full">
                  <Book className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Passion</h3>
              </div>
              <p className="text-lg text-gray-700">{hobby}</p>
            </Card>

            {/* Favorite Book */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-pink-100 rounded-full">
                  <Book className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Favorite Book</h3>
              </div>
              <p className="text-lg text-gray-700 italic">"{favoriteBook}"</p>
            </Card>
          </div>
        </div>

        {/* Personal Message from Best Friend */}
        <Card className="p-8 bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 shadow-xl">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              <Heart className="w-8 h-8 text-pink-600" />
              My Bestest Friend
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed italic">
                "Janvi, you mean absolutely everything to me. You are not just my best friend, 
                you are my soul sister, my constant support, and the brightest star in my life."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Watching you grow into this incredible author and seeing your dedication to your career 
                fills my heart with so much pride. Your talent knows no bounds, and your determination 
                inspires me every single day. From reading books together to celebrating your published 
                work "Unbreakable Ties," every moment with you has been a treasure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You have this amazing way of making everything better just by being yourself. Your love 
                for your mother, your passion for reading, your serious approach to your career - 
                everything about you makes you the most wonderful person I know.
              </p>
              <p className="text-xl font-semibold text-pink-700">
                Happy 18th Birthday, my dearest Janvi! Here's to many more years of friendship, 
                laughter, books, and beautiful memories together! 💕
              </p>
              <p className="text-lg text-gray-600 mt-6">
                With all my love,<br />
                <span className="font-semibold text-pink-600">{fromFriend}</span>
              </p>
            </div>
          </div>
        </Card>



        {/* Footer */}
        <div className="text-center py-6">
          <p className="text-lg text-gray-600">
            Made with 💖 for an amazing friend
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-pink-400 rounded-full opacity-70"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
