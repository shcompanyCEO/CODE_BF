import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { CardContent, Card, CardTitle, CardHeader } from '@/components/ui/card';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from '@/components/ui/collapsible';
import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from '@/components/ui/dialog';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import CommonLayout from '@/components/common/CommonLayout';
import { useRouter } from 'next/router';
import {
  AwardIcon,
  CalendarCheckIcon,
  CameraIcon,
  CarIcon,
  ChefHatIcon,
  ChevronRightIcon,
  GripIcon,
  HeartIcon,
  MapPinIcon,
  MedalIcon,
  MountainSnowIcon,
  ShareIcon,
  StarIcon,
  WavesIcon,
  WindIcon,
} from '@/components/ui/icon';
import { AccessibilityIcon, WifiIcon } from 'lucide-react';
import ReservationModal from '@/components/modal/ResereModal';
import useModalStore from 'store/stores/useModalStore';
import ModalLayout from '@/components/common/ModalLayout';
import InviteDesigner from '@/components/storeOperation/storeManagement/employeeManagement/InviteDesigner';
import Image from 'next/image';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { InvitationsStore } from 'store/stores/employeeManagement/useInvitationsStore';

const ProductDetailPage = () => {
  const { setSalonId } = InvitationsStore();
  const router = useRouter();
  const { productionID, salonId, salonName, category } = router.query;
  const { employeeRegistrationHandler, isEmployeeRegistration } = useModalStore();
  const salonData = {
    salonId,
    salonName,
    category,
  };
  useEffect(() => {
    setSalonId(`${salonId}`);
  }, [setSalonId]);

  return (
    <CommonLayout>
      <div className="max-w-6xl mx-auto p-2 lg:px-4 sm:py-8 md:py-10">
        <section className="hidden sm:flex flex-col gap-4 sm:flex-row sm:items-center pb-4 sm:pb-8">
          <h1 className="text-xl lg:text-3xl font-semibold tracking-tight">{productionID}</h1>
          <nav className="flex items-center justify-center gap-1 sm:ml-auto">
            <Button
              asChild
              className="rounded-md gap-1 underline underline-offset-2"
              size="sm"
              variant="ghost"
            >
              <Link href="#">
                <ShareIcon className="w-4 h-4" />
                Share
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-md gap-1 underline underline-offset-2"
              size="sm"
              variant="ghost"
            >
              <Link href="#">
                <HeartIcon className="w-4 h-4" />
                Save
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-md gap-1 underline underline-offset-2"
              size="sm"
              variant="ghost"
            >
              <Button onClick={employeeRegistrationHandler}>직원 등록 하기</Button>
            </Button>
          </nav>
        </section>
        <section className="relative bg-gray-100 dark:bg-gray-800">
          <div className="grid sm:grid-cols-4 gap-2">
            <Link
              className="col-span-2 row-span-2 relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all rounded-xl sm:rounded-l-xl overflow-hidden dark:focus-visible:ring-gray-300"
              href="#"
            >
              <Image
                alt="Living room"
                className="aspect-square object-cover"
                height={600}
                src="/placeholder.svg"
                width={600}
              />
            </Link>
            <Link
              className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all rounded-tl-xl overflow-hidden dark:focus-visible:ring-gray-300"
              href="#"
            >
              <Image
                alt="Living room"
                className="aspect-square object-cover"
                height={600}
                src="/placeholder.svg"
                width={600}
              />
            </Link>
            <Link
              className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all overflow-hidden rounded-tr-xl dark:focus-visible:ring-gray-300"
              href="#"
            >
              <Image
                alt="Fireplace"
                className="aspect-square object-cover"
                height={600}
                src="/placeholder.svg"
                width={600}
              />
            </Link>
            <Link
              className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all rounded-bl-xl overflow-hidden dark:focus-visible:ring-gray-300"
              href="#"
            >
              <Image
                alt="Bathroom"
                className="aspect-square object-cover"
                height={600}
                src="/placeholder.svg"
                width={600}
              />
            </Link>
            <Link
              className="relative after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 transition-all overflow-hidden rounded-br-xl dark:focus-visible:ring-gray-300"
              href="#"
            >
              <Image
                alt="Bedroom"
                className="aspect-square object-cover"
                height={600}
                src="/placeholder.svg"
                width={600}
              />
            </Link>
          </div>
          <Button className="gap-1 absolute bottom-4 right-4" size="sm" variant="secondary">
            <GripIcon className="w-4 h-4" />
            Show all photos
          </Button>
        </section>
        {/* <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start"> */}
        <section className="py-8 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <div className="grid gap-8 row-start-2 md:row-start-auto">
            <div className="flex-col gap-1">
              {/* <div className="hidden md:flex flex-col gap-1"> */}
              <div className="text-2xl font-semibold">Disigner Profile</div>
              <ReservationModal />
            </div>
            <Card>
              <CardContent className="p-4 sm:p-6 flex items-center gap-6 relative">
                <AwardIcon className="w-10 h-10" />
                <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
                  One of the most loved homes on Airbnb, according to guests.
                </div>
                <div className="flex items-center gap-6 ml-auto">
                  <div className="flex flex-col gap-1 text-center">
                    <div className="text-2xl font-semibold tracking-tighter">4.93</div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                      <StarIcon className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  <Separator className="h-9" orientation="vertical" />
                  <div className="flex flex-col gap-0.5 text-center">
                    <div className="text-2xl font-semibold tracking-tighter">745</div>
                    <div className="text-xs underline font-semibold">Reviews</div>
                  </div>
                </div>
                <Link className="absolute inset-0" href="#">
                  <span className="sr-only">View reviews</span>
                </Link>
              </CardContent>
            </Card>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="grid gap-0.5">
                <div className="font-semibold">Hosted by Catherine</div>
                <div className="text-gray-500 text-sm dark:text-gray-400">
                  Joined in 2010 · Superhost
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <CalendarCheckIcon className="w-7 h-7" />
              </div>
              <div className="grid gap-0.5">
                <div className="font-semibold">Free cancellation for 48 hours</div>
                <div className="text-gray-500 text-sm dark:text-gray-400">
                  Get a full refund if you change your mind.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <MedalIcon className="w-7 h-7" />
              </div>
              <div className="grid gap-0.5">
                <div className="font-semibold">Catherine is a Superhost</div>
                <div className="text-gray-500 text-sm dark:text-gray-400">
                  Superhosts are experienced, highly rated hosts.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <MapPinIcon className="w-7 h-7" />
              </div>
              <div className="grid gap-0.5">
                <div className="font-semibold">Great location</div>
                <div className="text-gray-500 text-sm dark:text-gray-400">
                  100% of recent guests gave the location a 5-star rating.
                </div>
              </div>
            </div>
            <Separator />
            <div className="prose">
              <p>
                Welcome to our serene mountain retreat! Nestled amidst the tranquil beauty of the
                mountains, this cozy home is your perfect getaway for relaxation and adventure.
              </p>
              <p>
                Wake up to breathtaking vistas from every window. Enjoy your morning coffee on the
                balcony, taking in the serene landscape. This mountain haven is perfect for
                families, friends, and couples seeking a blend of adventure and relaxation. Book
                your stay and experience the magic of the mountains!
              </p>
              <Collapsible>
                <CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90">
                  Show more
                  <ChevronRightIcon className="w-4 h-4 translate-y-px transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p>
                    Our home comfortably sleeps up to 6 guests in 3 beautifully appointed bedrooms,
                    each designed for relaxation and comfort. Cook up a storm in our modern kitchen,
                    complete with all the appliances and utensils you need for a home-cooked meal.
                  </p>
                  <p>
                    Stay connected with high-speed internet and a dedicated workspace, ideal for
                    those who mix travel with work.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
            <Separator />
            <div className="grid gap-8">
              <h3 className="text-xl font-semibold">What this place offers</h3>
              <ul className="grid lg:grid-cols-2 gap-6">
                <li className="flex gap-4">
                  <MountainSnowIcon className="w-6 h-6" />
                  Mountain view
                </li>
                <li className="flex gap-4">
                  <WavesIcon className="w-6 h-6" />
                  Beach access
                </li>
                <li className="flex gap-4">
                  <ChefHatIcon className="w-6 h-6" />
                  Private chef
                </li>
                <li className="flex gap-4">
                  <WifiIcon className="w-6 h-6" />
                  Wifi
                </li>
                <li className="flex gap-4">
                  <CarIcon className="w-6 h-6" />
                  Parking
                </li>
                <li className="flex gap-4">
                  <CameraIcon className="w-6 h-6" />
                  Security cameras
                </li>
                <li className="flex gap-4">
                  <AccessibilityIcon className="w-6 h-6" />
                  Wheelchair accessible
                </li>
                <li className="flex gap-4">
                  <WindIcon className="w-6 h-6" />
                  Patio
                </li>
              </ul>
              <Button className="justify-self-start" variant="outline">
                Show all amenities
              </Button>
            </div>
          </div>
          <div className="grid gap-4 row-start-1 md:row-start-auto">
            <div className="flex sm:hidden flex-col gap-1">
              <h2 className="sm:text-2xl font-semibold">
                Home in Santa Cruz, California, United States
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                2 guests · 1 bedroom · 1 bed · 1 bath · Wifi · Kitchen
              </p>
            </div>
            <Dialog>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Report this listing</DialogTitle>
                  <DialogDescription>This won’t be shared with the Host.</DialogDescription>
                  <div className="py-6">
                    <form>
                      <RadioGroup>
                        <Label
                          className="text-base font-normal flex items-center w-full cursor-pointer"
                          htmlFor="inaccurate"
                        >
                          It’s inaccurate or incorrect
                          <RadioGroupItem className="ml-auto" id="inaccurate" value="inaccurate" />
                        </Label>
                        <Separator className="my-4" />
                        <Label
                          className="text-base font-normal flex items-center w-full cursor-pointer"
                          htmlFor="not_a_place"
                        >
                          It’s not a place to stay
                          <RadioGroupItem
                            className="ml-auto"
                            id="not_a_place"
                            value="not_a_place"
                          />
                        </Label>
                        <Separator className="my-4" />
                        <Label
                          className="text-base font-normal flex items-center w-full cursor-pointer"
                          htmlFor="scam"
                        >
                          It’s a scam
                          <RadioGroupItem className="ml-auto" id="scam" value="scam" />
                        </Label>
                        <Separator className="my-4" />
                        <Label
                          className="text-base font-normal flex items-center w-full cursor-pointer"
                          htmlFor="offensive"
                        >
                          It’s offensive
                          <RadioGroupItem className="ml-auto" id="offensive" value="offensive" />
                        </Label>
                        <Separator className="my-4" />
                        <Label
                          className="text-base font-normal flex items-center w-full cursor-pointer"
                          htmlFor="something_else"
                        >
                          It’s something else
                          <RadioGroupItem
                            className="ml-auto"
                            id="something_else"
                            value="something_else"
                          />
                        </Label>
                      </RadioGroup>
                    </form>
                  </div>
                </DialogHeader>
                <DialogFooter>
                  <div>
                    <Button variant="ghost">Cancel</Button>
                  </div>
                  <Button>Report</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>
        <Separator />
        <section className="py-10 grid gap-8">
          <div className="grid lg:grid-cols-2 gap-x-32 gap-y-12">
            <article className="grid gap-3">
              <div className="flex items-center gap-4">
                <Avatar className="w-11 h-11 border">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5">
                  <div className="font-semibold">Scott</div>
                  <div className="text-gray-500 text-sm dark:text-gray-400">
                    Bernard Hill, California
                  </div>
                </div>
              </div>
              <div className="font-semibold flex items-center text-xs gap-2">
                <div className="flex items-center gap-px">
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5" />
                </div>
                ·<span>1 week ago</span>
              </div>
              <div>
                Catherine’s place was amazing! The views were incredible and the house was very
                clean. We had a great time.
              </div>
            </article>
            <article className="grid gap-3">
              <div className="flex items-center gap-4">
                <Avatar className="w-11 h-11 border">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5">
                  <div className="font-semibold">Julie</div>
                  <div className="text-gray-500 text-sm dark:text-gray-400">Miami, California</div>
                </div>
              </div>
              <div className="font-semibold flex items-center text-xs gap-2">
                <div className="flex items-center gap-px">
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5" />
                </div>
                ·<span>1 week ago</span>
              </div>
              <div>
                We had a great time and would definitely stay again! Gorgeous views and a beautiful
                home.
              </div>
            </article>
            <article className="grid gap-3">
              <div className="flex items-center gap-4">
                <Avatar className="w-11 h-11 border">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5">
                  <div className="font-semibold">Nicole</div>
                  <div className="text-gray-500 text-sm dark:text-gray-400">Nevada, California</div>
                </div>
              </div>
              <div className="font-semibold flex items-center text-xs gap-2">
                <div className="flex items-center gap-px">
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5" />
                </div>
                ·<span>1 week ago</span>
              </div>
              <div>
                This is my second time staying at Catherine’s place and it was just as amazing as
                the first time. I would definitely stay again!
              </div>
            </article>
            <article className="grid gap-3">
              <div className="flex items-center gap-4">
                <Avatar className="w-11 h-11 border">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5">
                  <div className="font-semibold">Miranda</div>
                  <div className="text-gray-500 text-sm dark:text-gray-400">
                    Citrus Height, California
                  </div>
                </div>
              </div>
              <div className="font-semibold flex items-center text-xs gap-2">
                <div className="flex items-center gap-px">
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5 fill-gray-900 dark:fill-gray-50" />
                  <StarIcon className="w-2.5 h-2.5" />
                </div>
                ·<span>1 week ago</span>
              </div>
              <div className="">
                Super clean, great location, and amazing views. We had a great time and wish we
                could have stayed longer!
              </div>
            </article>
          </div>
          <Button className="justify-self-start" variant="outline">
            Show all reviews
          </Button>
        </section>
        {isEmployeeRegistration && (
          <ModalLayout modalClose={employeeRegistrationHandler}>
            <InviteDesigner {...salonData} />
          </ModalLayout>
        )}
      </div>
    </CommonLayout>
  );
};
export default ProductDetailPage;
