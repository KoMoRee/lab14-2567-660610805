"use client";
import { Container, Pagination, Group, Text, Title, Space, Rating, Textarea, Button, Divider} from "@mantine/core";
import { Smokum } from "next/font/google";
import { useState } from "react";

export default function Home() {

  const [rate, setRate] = useState(0);


  return (
    <Container size="600px">
      <Title order={2} >Food Review 🍕</Title>

      <Space h={'sm'}> </Space>

      <Title order={4}>Your rating</Title>
      <Rating value={rate} onChange={setRate} size={'lg'} />

      <Space h={'sm'}> </Space>

      <Text size="sm">Your review</Text>
      <Textarea
      size="md"
      inputSize="xs"
      placeholder="Do you enjoy eating?"
      />

      <Button mt='xs' color="orange">Submit Review</Button>

      <Divider my="sm" />

      <Group justify="center">
        <Title order={4} >Elon Musk</Title> 
        <Rating value={5} readOnly/>
      </Group>
        <Text ta="center" size="md" c="dimmed">Best pizza in this world. I give you X score.</Text>

      <Divider my="sm" />

      <Group justify="center">
        <Title order={4} >Mark Zuck</Title> 
        <Rating value={4} readOnly/>
      </Group>
        <Text ta="center" size="md" c="dimmed">My favourite part is pepperoni</Text>

      <Space h={'lg'}> </Space>

      <Group justify="center">
        <Pagination  total={20} color="orange" />
      </Group>





      <Text ta="center" my="sm" size="md" c={'dimmed'}>
        Copyright © 2024 Atip Poonkatevit 660610805
      </Text>
    </Container>
  );
}
