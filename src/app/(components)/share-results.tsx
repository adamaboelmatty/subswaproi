import React from 'react';
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

interface ShareResultsProps {
  monthlyAmount: number;
  years: number;
  totalGains: number;
}

const ShareResults = ({ monthlyAmount, years, totalGains }: ShareResultsProps) => {
  const shareText = `I just discovered I could save $${monthlyAmount.toLocaleString()} monthly on subscriptions and potentially earn $${totalGains.toLocaleString()} in ${years} years by investing instead! Check out @SubSwapROI to calculate your potential gains.`;
  const shareUrl = "https://subswaproi.com";

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`).then(() => {
      toast.success('Results copied to clipboard!');
    });
  };

  return (
    <div className="bg-emerald-50 rounded-lg p-6 mt-8">
      <h3 className="text-xl font-semibold text-emerald-700 mb-4">
        Share Your Results! 🎉
      </h3>
      
      <p className="text-gray-600 mb-6">
        Help others discover their potential savings and investment growth.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 hover:bg-[#1DA1F2] hover:text-white transition-colors"
          onClick={shareToTwitter}
        >
          <Twitter className="w-4 h-4" />
          Share on Twitter
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2 hover:bg-[#4267B2] hover:text-white transition-colors"
          onClick={shareToFacebook}
        >
          <Facebook className="w-4 h-4" />
          Share on Facebook
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-2 hover:bg-[#0077b5] hover:text-white transition-colors"
          onClick={shareToLinkedIn}
        >
          <Linkedin className="w-4 h-4" />
          Share on LinkedIn
        </Button>
      </div>
    </div>
  );
};

export default ShareResults;