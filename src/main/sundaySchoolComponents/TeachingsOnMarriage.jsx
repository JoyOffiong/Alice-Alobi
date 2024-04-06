import React from "react";
import Header from "../../sharedComponent/Header";

function TeachingsOnMarriage() {
  return (
    <div className="font-sans">
      <Header />
      <div className="h-[400px] shadow-lg ">
        <img
          src="https://www.churchofjesuschrist.org/imgs/4fa61b95a20557586b4db7755bc9ba99928ffacc/full/1280%2C/0/default"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="my-8 text-left md:w-[60%] w-full md:mx-auto mx-12  flex flex-col gap-y-4 ">
        <div className="flex flex-col gap-y-2">
          <p className="font-semi-bold text-[40px]">
            The Reason for the Institution called Marriage
          </p>
          <p className="text-sm font-normal">
            Marriage is an eternal concept. It is meant to be a loving,
            intimate, selfless relationship between a man and a woman that lasts
            through eternity.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="font-semi-bold text-[30px]">A relationship of love</p>
          <p className="text-sm">
            A relationship of love The Bible teaches, “Husbands, love your
            wives” (Ephesians 5:25) and “teach the young women … to love their
            husbands” (Titus 2:4). Love in marriage can be deeper and more
            selfless than in any other relationship. It is this type of love
            that Jesus expects of His followers, and it is the virtue that
            couples need the most.
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="font-semi-bold text-[30px]">
            {" "}
            A relationship of intimacy{" "}
          </p>
          <p className="text-sm">
            Marriage involves spiritual, emotional, and physical closeness. In
            the Old Testament, we are taught, “Therefore shall a man leave his
            father and his mother, and shall cleave unto his wife: and they
            shall be one flesh” (Genesis 2:24). Married couples are meant to be
            unified in every possible way. Sexual intimacy is an expression of
            love that brings happiness and unity into a marriage. It is also the
            power by which married couples can “multiply, and replenish the
            earth” (Genesis 1:28). Intimacy is a blessing that can lead to the
            incomparable joy of children as part of the eternal family unit.
          </p>
        </div>

        <div>
          <p className="font-semi-bold text-[30px]">
            A relationship of selflessness
          </p>
          <p className="text-sm">
            The Savior taught, “Greater love hath no man than this, that a man
            lay down his life for his friends” (John 15:13). Couples can learn a
            powerful lesson from this teaching. As a spouse, you are expected to
            essentially lay down your old life and to sacrifice many of your
            personal desires for your closest friend—your husband or wife. The
            more you are able to put your spouse first and keep your focus on
            the success of your partnership, the stronger your marriage will be.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeachingsOnMarriage;
