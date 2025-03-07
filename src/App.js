import logo from './logo.svg';
import './App.css';
import { Box, Button, Center, Flex, Heading, HStack, IconButton, Input, Separator, Stack, Tabs, Text, Textarea, VStack } from '@chakra-ui/react';
import { SegmentedControl } from "./components/ui/segmented-control"
import { InputGroup } from "./components/ui/input-group"
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu';
import { RiSafe2Fill, RiSafe3Fill } from 'react-icons/ri';
import { Field } from './components/ui/field';
import { FaEye, FaEyeSlash, FaRegEnvelope, FaRegEnvelopeOpen } from 'react-icons/fa';
import { IoKey, IoKeyOutline } from 'react-icons/io5';
import { PasswordInput } from "./components/ui/password-input"
import { useState } from 'react';



function App() {


  const [showInformation, setShowInformation] = useState(false);

  return (
    <Flex flexDir='column' h='100vh' w='full' >
      <VStack gap='12'>
        <SegmentedControl mt='12' defaultValue="RSA" items={["RSA", "AES", "SHA-2"]} size="lg" />

        <Tabs.Root defaultValue="crypt" size='lg' bg='gray.950' rounded='xl' padding='6' w='50%' fontFamily='Open sans'>
          <Tabs.List>
            <Tabs.Trigger value="crypt">
              <RiSafe3Fill />
              Criptografar
            </Tabs.Trigger>
            <Tabs.Trigger value="decrypt">
              <RiSafe2Fill />
              Descriptografar
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="crypt" display='flex' gap='6' >
            <VStack w='50%' gap='8'>
              <Heading w='full'>Encriptografar</Heading>
              <Field label="Mensagem" w='full'>
                <InputGroup startElement={<FaRegEnvelopeOpen />} w='full'>
                  <Input placeholder="Mensagem para encriptografar" size='lg' rounded='lg' />
                </InputGroup>
              </Field>
              <Button rounded='full' variant='outline' colorPalette='red' size='xl'>
                Encriptografar mensagem
              </Button>
            </VStack>
            <Separator orientation='vertical' />
            <VStack w='50%' gap='8'>
              <Flex w='full' justify='flex-start' align='center'>
                <Heading w='full'>Descriptografar</Heading>
                <IconButton aria-label="Search database" onClick={() => setShowInformation(!showInformation)} size='sm' variant='ghost'>
                  {showInformation ? <FaEye /> : <FaEyeSlash />}
                </IconButton>
              </Flex>
              <Field label="Mensagem encriptografada" w='full'>
                <InputGroup startElement={<FaRegEnvelope />} w='full'>
                  <PasswordInput disabled visible={showInformation} placeholder="..." size='lg' rounded='lg' visibilityIcon='off' />
                </InputGroup>
              </Field>
              <HStack>
                <Field label='Chave primária'>
                  <InputGroup startElement={<IoKey />} w='full'>
                    <PasswordInput disabled visible={showInformation} placeholder="..." size='lg' rounded='lg' visibilityIcon='off' />
                  </InputGroup>
                </Field>
                <Field label='Chave secundária'>
                  <InputGroup startElement={<IoKeyOutline />} w='full'>
                    <PasswordInput disabled visible={showInformation} placeholder="..." size='lg' rounded='lg' visibilityIcon='off' />
                  </InputGroup>
                </Field>
              </HStack>

            </VStack>
          </Tabs.Content>
          <Tabs.Content value="decrypt" display='flex' gap='6' >

            <VStack w='50%' gap='8'>
              <Heading w='full'>Descriptografar</Heading>

              <Field label="Mensagem encriptografada" w='full'>
                <InputGroup startElement={<FaRegEnvelope />} w='full'>
                  <Input placeholder="..." size='lg' rounded='lg'/>
                </InputGroup>
              </Field>
              
              <HStack>

                <Field label='Chave primária'>
                  <InputGroup startElement={<IoKey />} w='full'>
                    <Input placeholder="..." size='lg' rounded='lg'/>
                  </InputGroup>
                </Field>

                <Field label='Chave secundária'>
                  <InputGroup startElement={<IoKeyOutline />} w='full'>
                    <Input placeholder="..." size='lg' rounded='lg'/>
                  </InputGroup>
                </Field>
              
              </HStack>

              <Button rounded='full' variant='outline' colorPalette='green' size='xl'>
                Descriptografar mensagem
              </Button>
            </VStack>
            <Separator orientation='vertical' />
            <VStack w='50%' gap='8'>
              <Heading w='full'>Encriptografar</Heading>
              <Field label="Mensagem" w='full'>
                  <Textarea disabled maxH='48' minH='48'></Textarea>
              </Field>
            </VStack>
          </Tabs.Content>
        </Tabs.Root>


      </VStack>
    </Flex>
  );
}

export default App;
