import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';

function AboutTheChurch() {
  return (
    <div className="mb-10 p-12 bg-[#f5f5f7]">
      <div>
        <div className="flex ">
          <p>The Church of Christ</p>
          <hr />
        </div>
        <p className="font-bold text-lg">WHO ARE WE</p>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div>
          <p>
            The Church of Christ is the one and only true church established by
            Christ. Jesus Christ is the Head of his church and the Church is his
            body. Churches of Christ all over the world follow the scriptural
            guidelines in line with the following mandates set by the Apostles:
          </p>

          <div className="flex flex-col mt-4 gap-y-2">
            <p className="flex items-center gap-2"> <VerifiedIcon/>  Edification</p>
            <p className="flex items-center gap-2"> <VerifiedIcon/> Benevolence</p>
            <p className="flex items-center gap-2"> <VerifiedIcon/> Evangelism</p>
          </div>
        </div>

        <div>
            <p className="font-normal">
            We have only ONE DOCTRINE which is The Doctrine of Christ. We solely believe in the Bible as it is the authoritative source of God's spoken Word. We have only ONE belief which is based solely on the Bible. We speak where the Bible speaks and are silent where the Bible is silent.
            </p>
            <p className="font-semibold">
            Churches of Christ all over the world work in unity towards helping every person to gain the truth about God's perfect salvation for mankind.
            </p>
        </div>
      </div>
    </div>
  );
}

export default AboutTheChurch;
