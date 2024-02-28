import { Box, Stack, Image, Heading, Container, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const PageChakra = () => {
  return (
    <>
      <Box>
        <MyCarousel />

        <Container maxW={"container.xl"} minH={"100vh"} p="16">
          <Heading
            textTransform={"uppercase"}
            py="2"
            w={"fit-content"}
            borderBottom={"2px solid"}
            m="auto"
          >
            Services
          </Heading>

          <Stack
            h="full"
            p={"4"}
            alignItems={"center"}
            direction={["column", "row"]}
          >
            <Image
              src={img5}
              h={["40", "400"]}
              filter={"hue-rotate(-130deg)"}
            />

            <Text
              letterSpacing={"widest"}
              lineHeight={"190%"}
              p={["4", "16"]}
              textAlign={"center"}
            >
              Welcome to our gaming paradise! At [VIDEO HUB], we are dedicated
              to providing exceptional services that will take your gaming
              experience to new heights. Whether you're a casual player or a
              hardcore gamer, our services are tailored to meet all your gaming
              needs. Explore the array of services we offer and prepare to level
              up like never before. Experience the thrill of gaming with
              top-of-the-line equipment without breaking the bank. We offer a
              wide range of high-quality gaming gear available for rent. From
              cutting-edge gaming consoles to high-performance graphics cards
              and immersive VR headsets, our gear will give you the competitive
              edge you need to conquer any virtual world.
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={"80vh"}>
      <Image src={img1} h="full" w={"full"} objectFit={"cover"} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={"80vh"}>
      <Image src={img2} h="full" w={"full"} objectFit={"cover"} />
      <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={"80vh"}>
      <Image src={img3} h="full" w={"full"} objectFit={"cover"} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={"80vh"}>
      <Image src={img4} h="full" w={"full"} objectFit={"cover"} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);
export default PageChakra;
