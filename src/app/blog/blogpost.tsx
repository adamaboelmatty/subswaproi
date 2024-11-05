'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Calculator, Clock, Twitter, Facebook, } from "lucide-react";
import Link from "next/link";

const READING_TIME_WPM = 200; // Average reading speed in words per minute

const BlogPost = () => {
  // Calculate reading time
  const content = document.getElementById('article-content')?.textContent;
  const wordCount = content?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / READING_TIME_WPM);

  // Social sharing functions
  const shareUrl = "https://subswaproi.com/blog";
  const shareTitle = "6 Financial Tools to Transform Your Spending into Wealth with SubSwapROI";

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Floating CTA Button */}
      <Link href="/">
        <Button 
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg transform transition-all duration-200 hover:scale-105 z-50 flex items-center gap-2"
        >
          <Calculator className="w-4 h-4" />
          Try SubSwapROI Calculator
        </Button>
      </Link>

      {/* Social Share Buttons */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-blue-50 hover:text-blue-500 transition-all"
          onClick={shareOnTwitter}
        >
          <Twitter className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-blue-600 hover:text-white transition-all"
          onClick={shareOnFacebook}
        >
          <Facebook className="h-5 w-5" />
        </Button>
      </div>

      {/* Blog Content */}
      <article id="article-content" className="max-w-4xl mx-auto px-4 py-12 prose prose-lg prose-emerald">
        {/* Reading Time */}
        <div className="flex items-center text-gray-500 mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span>{readingTime} min read</span>
        </div>

        <h1 className="text-3xl font-bold text-emerald-700 mb-8">
          6 Financial Tools to Transform Your Spending into Wealth with SubSwapROI
        </h1>

        {/* Article Date */}
        <div className="text-gray-500 mb-8">
          Published on {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>

        <p className="text-gray-600 mb-8">
          Are your subscription costs eating away at your budget each month? Ever wondered what your money could be worth if you redirected it into investments instead? With SubSwapROI, you can visualize how canceling or optimizing your subscriptions could turn monthly expenses into a pathway for wealth. Here's a look at some of the best financial tools that can help you take control of your finances, optimize spending, and build a better financial future.
        </p>

        {/* Tool 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            1. Robinhood: Start Investing with No Commissions
          </h2>
          <p className="text-gray-600 mb-4">
            Robinhood revolutionized the investment world by making trading commission-free, allowing everyone to start investing in stocks, ETFs, and even cryptocurrencies without fees. Instead of spending on unused subscriptions, you could redirect those funds to a Robinhood account and begin your investment journey.
          </p>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="text-emerald-700 font-medium">
              How SubSwapROI can help: Calculate the potential growth of monthly deposits to a Robinhood account. By canceling subscriptions and investing that money, you can build wealth over time and diversify your financial portfolio.
            </p>
          </div>
        </section>

        {/* Tool 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            2. Rocket Money: Track, Manage, and Reduce Subscription Costs
          </h2>
          <p className="text-gray-600 mb-4">
            Rocket Money (formerly Truebill) is designed to help you identify and manage your subscriptions, track spending, and even negotiate bills. By analyzing where your money is going each month, you can make more informed choices about which subscriptions to keep and which ones to redirect toward investments.
          </p>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="text-emerald-700 font-medium">
              How SubSwapROI can help: Use our calculator alongside Rocket Money to see how much potential wealth could be gained by canceling unused subscriptions and investing those savings. Rocket Money helps you identify where your money is going, and SubSwapROI shows you where it could go instead.
            </p>
          </div>
        </section>

        {/* Tool 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            3. Quicken: Comprehensive Financial Management
          </h2>
          <p className="text-gray-600 mb-4">
            Quicken is a powerful tool for managing your finances, helping you budget, track investments, and monitor your spending across different accounts. With insights into your monthly expenses, including subscriptions, Quicken allows you to make data-driven decisions about your spending and investing habits.
          </p>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="text-emerald-700 font-medium">
              How SubSwapROI can help: Quicken provides insights into your finances, and SubSwapROI allows you to visualize the future value of redirecting subscription costs into investments. See how your small monthly savings could grow over time if invested instead of spent on recurring fees.
            </p>
          </div>
        </section>

        {/* Tool 4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            4. SoFi: Diverse Financial Services and Investing Options
          </h2>
          <p className="text-gray-600 mb-4">
            SoFi offers a wide range of financial products, including loans, banking, investing, and financial planning. With SoFi Invest, you can start building an investment portfolio with as little as $1. Instead of paying for subscriptions you don't use, redirect that money into a SoFi account to take advantage of investment opportunities.
          </p>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="text-emerald-700 font-medium">
              How SubSwapROI can help: Use our tool to project the potential growth of regular investments in a SoFi account, funded by canceled subscriptions. With SubSwapROI, you'll see the wealth-building power of turning monthly fees into long-term investments.
            </p>
          </div>
        </section>

        {/* Tool 5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            5. Credit Karma: Improve Financial Health and Access Investment Tools
          </h2>
          <p className="text-gray-600 mb-4">
            Credit Karma is known for its free credit score tracking and financial insights, but it also offers recommendations for credit products and investment tools. Improving your credit score and managing debt could free up more funds to invest, especially if you're paying for subscriptions on credit cards.
          </p>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="text-emerald-700 font-medium">
              How SubSwapROI can help: By managing debt and freeing up cash flow, Credit Karma and SubSwapROI work together to help you optimize your finances. SubSwapROI shows you the potential of redirecting monthly expenses into wealth-building investments instead of additional credit payments.
            </p>
          </div>
        </section>

        {/* Tool 6 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            6. Wise: Smart International Money Management
          </h2>
          <p className="text-gray-600 mb-4">
            Wise (formerly TransferWise) offers international money transfers and multi-currency accounts with low fees. If you're paying for international subscriptions or services, Wise can help you reduce currency conversion costs and redirect those savings into investments.
          </p>
          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="text-emerald-700 font-medium">
              How SubSwapROI can help: Calculate how much you could save on international subscription fees and currency conversion costs, then see how those savings could grow through smart investing with SubSwapROI's projection tools.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
            Final Thoughts
          </h2>
          <p className="text-gray-600 mb-4">
            Subscription costs may seem small on their own, but they add up quickly and can often prevent you from making meaningful financial progress. By evaluating your subscriptions and seeing how those monthly expenses could grow as investments, SubSwapROI empowers you to make more intentional financial decisions.
          </p>
          <p className="text-gray-600">
            These financial tools make it easier than ever to manage spending, save more, and invest in your future. Want to see how your subscriptions could be working for you instead? Try SubSwapROI today and take the first step toward a more optimized financial future!
          </p>
        </section>

        {/* Author Bio */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex items-center">
            <img 
              src="/api/placeholder/100/100" 
              alt="Author" 
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">Financial Expert</h3>
              <p className="text-gray-600">
                Personal finance enthusiast with over a decade of experience in investment and wealth management. Passionate about helping others achieve their financial goals through smart money management.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;