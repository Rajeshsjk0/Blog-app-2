import WrittenBy from "@/components/shared/Article/WrittenBy";
import { Text, VStack, Tag, TagLabel, Image, Wrap } from "@chakra-ui/react";

export default function Article() {
  return (
    <VStack spacing={5}>
      <Text>
        We’re an online magazine dedicated to covering the best in international
        product design. We started as a little blog back in 2002 covering
        student work and over time We’re an online magazine dedicated to
        covering the best in international product design. We started as a
        little blog back in 2002 covering student work and over time We’re an
        online magazine dedicated to covering the best in international product
        design. We started as a little blog back in 2002 covering student work
        and over time
      </Text>
      <Text>
        We’re an online magazine dedicated to covering the best in international
        product design. We started as a little blog back in 2002 covering
        student work and over time We’re an online magazine dedicated to
        covering the best in international product design. We started as a
        little blog back in 2002 covering student work and over time We’re an
        online magazine dedicated to covering the best in international product
        design. We started as a little blog back in 2002 covering student work
        and over time
      </Text>
      <Image
        src="https://s3.envato.com/files/295374879/IMG_9449.jpg"
        alt="Hero Section"
        width="100%"
        borderRadius={12}
      />
      <Text>
        We’re an online magazine dedicated to covering the best in international
        product design. We started as a little blog back in 2002 covering
        student work and over time We’re an online magazine dedicated to
        covering the best in international product design. We started as a
        little blog back in 2002 covering student work and over time We’re an
        online magazine dedicated to covering the best in international product
        design. We started as a little blog back in 2002 covering student work
        and over time
      </Text>
      <Text>
        We’re an online magazine dedicated to covering the best in international
        product design. We started as a little blog back in 2002 covering
        student work and over time We’re an online magazine dedicated to
        covering the best in international product design. We started as a
        little blog back in 2002 covering student work and over time We’re an
        online magazine dedicated to covering the best in international product
        design. We started as a little blog back in 2002 covering student work
        and over time
      </Text>
      <Image
        src="https://s3.envato.com/files/295374879/IMG_9449.jpg"
        alt="Hero Section"
        width="100%"
        borderRadius={12}
      />
      <Text>
        We’re an online magazine dedicated to covering the best in international
        product design. We started as a little blog back in 2002 covering
        student work and over time We’re an online magazine dedicated to
        covering the best in international product design. We started as a
        little blog back in 2002 covering student work and over time We’re an
        online magazine dedicated to covering the best in international product
        design. We started as a little blog back in 2002 covering student work
        and over time
      </Text>
      <Text>
        We’re an online magazine dedicated to covering the best in international
        product design. We started as a little blog back in 2002 covering
        student work and over time We’re an online magazine dedicated to
        covering the best in international product design. We started as a
        little blog back in 2002 covering student work and over time We’re an
        online magazine dedicated to covering the best in international product
        design. We started as a little blog back in 2002 covering student work
        and over time
      </Text>

      <Wrap mt={5} spacing={2} alignItems="flex-start" w={"full"}>
        {Array(10)
          //@ts-ignore
          .fill()
          .map((_, i) => (
            <Tag
              key={i}
              bg="white"
              borderColor={"tagBorder"}
              borderWidth={1}
              padding={3}
              borderRadius="10"
            >
              <TagLabel fontWeight={"regular"} color="subHeading">
                Technology
              </TagLabel>
            </Tag>
          ))}
      </Wrap>
      <WrittenBy
        title={"Eden Ronaldo"}
        image={
          "https://thumbs.dreamstime.com/b/man-silhouette-stand-alone-beach-watching-romantic-colorful-sunset-73828239.jpg"
        }
        subTitle={
          "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant. Read more"
        }
      />
    </VStack>
  );
}
