import React from "react";
import Image from "next/image";
import { Book } from "@/utils/customTypes";
import { formatCurrency } from "@/utils/currencyFormatter";

const BooksCard = (({ book }: { book: Book }) => (
  <div className="py-2 w-fit shadow-md mb-4">
    <div className="bg-customWhite w-fit">
      <Image
        className="object-cover w-[187px] h-[187px]"
        src={book?.cover_image}
        alt={book.cover_image || "No Image Found"}
        width={187}
        height={187}
      />
    </div>
    <div className="flex flex-col bg-white px-3 py-2">
      <p className="flex-1 text-sm text-customDarkGray font-notaSans">
        {book.title}
      </p>
      <div className="flex flex-row items-baseline">
        <h6 className="text-sm flex-1 text-customRed font-roboto">{`${book.discount_rate}%`}</h6>
        <h5 className="text-base text-customBlack font-roboto">{`${formatCurrency(
          book.price
        )}`}</h5>
      </div>
    </div>
  </div>
));

export default React.memo(BooksCard);
