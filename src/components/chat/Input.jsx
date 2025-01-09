const Input = () => {
  return (
    <div>
      <div className="flex flex-col h-fit w-full mt-2  gap-y-2">
        <form className="w-full flex gap-2 flex-col sm:flex-row">
          <div className="relative flex-1 flex items-center justify-center">
            <div className="flex flex-col w-full">
              <div className="relative">
                <textarea
                  className="flex w-full min-h-[40px] rounded-md border border-gray-400 dark:border-gray-600 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-12 resize-none overflow-hidden max-h-[70px] align-middle items-center"
                  placeholder="Talk to Agent..."
                  rows="1"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <div>
          <p className="text-[10px] sm:text-xs text-center text-muted-foreground text-white mb-3">
            Agent can make mistakes. Check important info.
          </p>
          <p className="text-[8px] sm:text-xs text-center text-muted-foreground text-[#6796F0]">
            © 2024 $AGNT. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Input;
