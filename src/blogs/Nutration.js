import styled from "@emotion/styled";
import { Link, Skeleton, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { language } from "../data/language";
import { LanguageContext } from "../context/LanguageContext";
import ReactPlayer from "react-player";
import mamad1 from "../assets/images/mamad.png";
import n1 from "../assets/images/1.png";
import n2 from "../assets/images/2.png";
import n3 from "../assets/images/3.png";
import n4 from "../assets/images/4.png";
import n5 from "../assets/images/5.png";
import n6 from "../assets/images/6.png";
import n7 from "../assets/images/7.png";
import n8 from "../assets/images/8.png";

const Nutrition = () => {
  //CONTEXT
  const { curLan } = useContext(LanguageContext);

  //STATES
  const [isLoaded, setIsLoaded] = useState(false);

  //FUNCS
  const handleVideoReady = () => {
    setIsLoaded(true);
  };
  return (
    <StyledPost>
      <Stack>
        <span style={{ fontSize: "40px" }}>🏋️</span>
        <Typography variant="h2">{language[curLan].nutrition}</Typography>
        <Typography variant="caption">
          {language[curLan].writer}: khaled
        </Typography>
        <Typography variant="caption">
          {language[curLan].readingTime}: 5 min
        </Typography>
      </Stack>
      <StyledStack>
        {!isLoaded && (
          <Skeleton
            sx={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        )}
        <ReactPlayer
          controls
          url="https://youtu.be/5KofqhFUP8E"
          width="100%"
          onReady={handleVideoReady}
        />
      </StyledStack>
      <Stack mt={5}>
        <Typography variant="h3">
          {language[curLan].nutritionInBodyBuilding}:
        </Typography>
        <Typography variant="body2">
          بریم سراغ موضوع اصلی این هفته که تغذیه هست، اگرما در تمریناتمون خیلی
          جدی باشیم و منظم آن ها را انجام دهیم قطعا بدن سالمتر و قوی تر خواهیم
          داشت ولی اگر تغذیه مناسب با هدفمون نداشته باشیم مطمئن باشید هرگز به
          نتیجه دلخواه نخواهیم رسید.
        </Typography>
        <Typography variant="body2">
          برای درک بهتر موضوع به این مثال دقت کنید. ممد رو از هفته قبل که یادتون
          هست.
        </Typography>
        <Typography variant="body2">
          اگر فیلم چطور اولین برنامه تمرینی را طراحی کنم رو ندید می تونید از این
          لینک <Link href="/posts/first-workout-plan"> اولین برنامه تمرین</Link>{" "}
          مشاهد کنید.
        </Typography>
        <img src={mamad1} alt="mamad" />
        <Typography variant="body2">
          ممد چند وقتیه که داره منظم تمرین میکنه و به این پی برده که بدنش آماده
          تر شده ولی باز تغیراتی در بدنش مشاهده نمی کنه. ممد پس شروع تمرینات
          بدنسازی تغذیه ش رو تغیر نداده یعنی به همون صورتی که قبلا غذا میخورده
          داره الانم میخوره. ولی مشکل اینجاست که ممد نمیدونه این غذا چه جوری
          توسط بدن داره استفاده میشه.{" "}
        </Typography>
        <img style={{ margin: "2rem 0" }} src={n1} alt="food" />
        <Typography variant="h4">ریز مغذی ها</Typography>
        <Typography variant="body2">
          به صورت کلی هر مواد غذایی که وارد بدنمون میشه را باید به اینگونه نگاه
          کنیم. فرض کنید شما برای نهار 100گرم برنج خوردید این 100گرم برنج از ریز
          مغذی هایی ساخته شده که از اینها 4 تا از همه در تغذیه مهمتر هستند. که
          اینها پروتئین، کربوهیدرات، چربی و فیبرها هستند.
        </Typography>
        <img style={{ margin: "2rem 0" }} src={n2} alt="food" />
        <Typography mt={5} variant="h4">
          حقوق غذایی 100 گرم برنج سفید
        </Typography>
        <Typography variant="body2">
          به عنوان مثال، 100گرم برنج پخته شده که یک منبع سالمه کربوهیدراته رو در
          نظر بگیرید.
        </Typography>
        <img style={{ margin: "2rem 0" }} src={n3} alt="food" />
        <Typography variant="body2">
          هر گرم کربوهیدرات داری 4 کالریه و هر گرم پروتیئن همچنین دارای 4کالریه
          اما اگر به چربی ها دقت کنید هر گرم چربی دارای 9کالریه.
        </Typography>
        <Typography variant="body2">
          هکربوهیدرات ها به عنوان انرژی در بدن استفاده می شوند و لی اگر بیش از
          اندازه مصرف شوند انرژی به مصرف نشده رو دستمون میمونه و به چربی تبدیل
          میشه😢.
        </Typography>
        <Typography variant="body2">
          هدر مجموع برنج سفید یکی از منابع بسیار سالم و محبوب در تغذیه است
          علارغم آوازه بد آن در جامعه.
        </Typography>
        <Typography variant="h4" mt={5}>
          حقوق غذایی 100 سینه مرغ
        </Typography>
        <Typography variant="body2">
          بحالا 100 گرم سینه مرغ گریل شده را بررسی می کنیم.
        </Typography>
        <img style={{ margin: "2rem 0" }} src={n4} alt="food" />
        <Typography variant="body2">
          اگر تصمیمی که برای فیت شدن گرفتین جدیه پس بهتون تبریک میگم از این به
          بعد این غذا عنصر ثابت روزانه تون میشه 😄.
        </Typography>
        <Typography mt={5} variant="h4">
          حقوق غذایی 100 پیتزا{" "}
        </Typography>
        <Typography variant="body2">
          بحالا بریم و 100 گرم پیتزا رو ببینیم.
        </Typography>
        <img style={{ margin: "2rem 0" }} src={n5} alt="food" />
        <Typography variant="body2">
          هدقت کنی نسبت چربی به شدت زیاده در مقایسه به دو مواد غذایی قبلی. به
          اندازه ای که اگر هر دوی آنها با هم جمع کنیم کالری کمتری نسبت به پیزا
          خواهند داشت و خیلی سالمتر هم هستند.
        </Typography>
        <img style={{ margin: "2rem 0" }} src={n6} alt="food" />
        <Typography variant="h4">نسبت ریزمغذی ها در برنامه تمرینی</Typography>
        <Typography variant="body2">
          نسبت 40%کربوهیدرات 35%پروتین 25%چربی به عنوان یکی از محبوبترین نسبت ها
          برای تغذیه در نظر گرفته شده است چه برای افزایش حجم عضله و چه برای کاهش
          حجم چربی و ما امروز از این نسبت در طراحی برنامه مون ازش استفاده می
          کینم شما هدفتون رو مشخص کنید و با ما همراه باشید تا بتونید تغییرات
          مورد نیاز رو روی برنامه تون اعمال کنید. بریم که برنامه مون رو بنوسیم
          😁.
        </Typography>
        <Typography variant="body2">
          برای این کار ابتد باید کالری روزانه مون رو به دست بیارم برای این کار
          می تونیم از محاسبگر کالری روزانه در وب سایت جوجوفیت (همین وبسایت)
          استفاده کنیم. از طریق این <Link href="/BMR-calculator">لینک</Link>{" "}
          واطلاعاتمون وارد می کنیم پس از وارد کردن اطلاعات محاسبه رو کلیک می
          کنیم و اینم کالری روزانه مون.
        </Typography>
        <Typography variant="body2">
          برای طراحی یک برنامه غذایی فاکتورهای زیادی مانند هدف(اضافه وزن، کاهش
          وزن، افزایش حجم عضله بدون چربی، کاهش چربی بدون از دست دادن عضله و و و
          و و و الا آخر) دخیل هستند وبه این دلیل است که هر شحصی باید برنامه
          غذایی متفاوتی داشته باشه
        </Typography>
        <Typography variant="body2">
          حالا باید هدفمون رو مشخص کنیم آیا کاهش وزن هست که برای این کار 200 تا
          300 کالری از عدد به دست آمده کم می کنیم و اگر اضافه وزن هست 200 تا 300
          کالری به عدد به دست آمده اضاف می کنیم و یا اینکه مبتدی هستید و میخواین
          از فرصت استفاده کنید و همزمان چربی ازدست بدین و عضله بسازید. چیزی که
          من میخوام انجام بدم عدد را خودش نگه دارید.
        </Typography>
        <Typography variant="body2">
          هر هدفی که انتخاب کردید عددتون رو به دست بیارید تا بریم و نسبت ریزمغذی
          ها رواز این کالری به دست بیارم. برای من میشه این.
        </Typography>
        <img style={{ margin: "2rem 0" }} src={n7} alt="food" />
        <Typography variant="body2">
          حالا بریم و اینا اعداد رو روی چهار تا پنج وعده تقسیم کنیم.{" "}
        </Typography>
        <img style={{ margin: "2rem 0" }} src={n8} alt="food" />
        <Typography variant="body2">اینم برنامه غذایی 🤝😋.</Typography>
        <Typography variant="body1">
          نکته مهم: شما میتوند مواد غذایی رو عوض کنید ولی حواستون باشه اعداد و
          ارقام باید تغییر نکنند با تشکر.
        </Typography>
      </Stack>
    </StyledPost>
  );
};

export default Nutrition;

export const StyledPost = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 10rem;
`;

export const StyledStack = styled(Stack)(({ theme }) => ({
  position: "relative",
  height: 200,
  borderRadius: "12px",
  overflow: "hidden",
  marginTop: "20px",
  [theme.breakpoints.up("sm")]: {
    height: "fit-content",
  },
}));
