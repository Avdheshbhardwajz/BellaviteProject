import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const Allprod = () => {
  const [state, setState] = useState([]);
  const [view, setView] = useState("bestseller");

  useEffect(() => {
    const fetchData = () => {
      let url = "";

      if (view === "bestseller") {
        url = "https://fakestoreapi.com/products/category/jewelery?limit=5";
      } else if (view === "newArrivals") {
        url =
          "https://fakestoreapi.com/products/category/women's clothing?limit=5";
      }

      axios
        .get(url)
        .then((res) => setState(res.data))
        .catch((err) => console.error(err));
    };

    fetchData();
  }, [view]); // Adding view as a dependency

  return (
    <>
      <div className="flex justify-center gap-5 flex-row text-3xl font-poppins m-4">
        <button onClick={() => setView("bestseller")}>Best Sellers</button>|
        <button onClick={() => setView("newArrivals")}>New Arrivals</button>
      </div>
      <div className="grid grid-cols-1 gap-5 font-poppins items-start content-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-center place-items-center">
        {state.length > 0 ? (
          state.map((data) => (
            <Card key={data.id} maxW="sm">
              <CardBody>
                <Image
                  src={data.image}
                  alt={data.title}
                  borderRadius="lg"
                  className="max-w-[200px] max-h-[200px]"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{data.title}</Heading>
                  <Text>{data.description}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${data.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </div>
      <div className="text-center m-5">
        <button className="text-white bg-black p-4">View All Products</button>
      </div>
    </>
  );
};

export default Allprod;
