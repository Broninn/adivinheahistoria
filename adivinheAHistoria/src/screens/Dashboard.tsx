import { View,Text, VStack, HStack, Button, Box, extendTheme } from 'native-base';
import * as React from 'react';

interface IDashboardProps {}

export const Dashboard: React.FC<IDashboardProps> = () => {
    return (
        <>
            <VStack flex={1} width='100vw' height='100vh' justifyContent={'space-between'} alignItems={'center'} p={4} my={30}>
                <Box width='100%' >
                    <HStack width='100%' justifyContent={'space-between'}>
                        <VStack >
                            <Text style={{color: "#fff"}} fontSize="xs">Som</Text>
                            <Text style={{color: "#fff"}} fontSize="xs">Troféu</Text>
                        </VStack>
                        <Text style={{color: "#fff"}} fontSize="xs">Menu</Text>
                    </HStack>
                    
                    
                </Box>
                <VStack alignItems={'center'} >
                    <Button.Group >
                        <Button id='1'colorScheme="teal">Terror</Button>
                        <Button id='2'colorScheme="teal" isDisabled>Fatos Reais</Button>
                        <Button id='3'colorScheme="teal" isDisabled>Animado</Button>
                    </Button.Group>
                    
                    <Button
                        mt={10}
                        backgroundColor={'transparent'}
                        size={'lg'}
                        onPress={()=>{
                            console.log('hello')
                        }}
                    >
                        Start
                    </Button>
                                       
                    
                </VStack>
                <Box>                    
                    <View>
                        <Text style={{color: "#fff"}}>Desenvolvido por: Brono</Text>
                    </View>
                </Box>
            </VStack>
        </>
    );    
}