import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4a90e2',  
        tabBarInactiveTintColor: '#999',   
        tabBarStyle: {
          backgroundColor: '#f5f5f5',      
          borderTopColor: '#ddd',          
        },
        tabBarLabelStyle: {
          fontSize: 12,                    
          fontWeight: 'bold',              
        },
        headerStyle: {
          backgroundColor: '#4a90e2',      
        },
        headerTintColor: '#fff',           
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="home" color={color} />
          ),
        //   tabBarBadge: '3',                
        //   tabBarBadgeStyle: {
        //     backgroundColor: '#ff6b6b',    
        //   },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome size={size} name="pencil-square-o" color={color} />
          ),
        //   tabBarBadge: '3',                
        //   tabBarBadgeStyle: {
        //     backgroundColor: '#ff6b6b',    
        //   },
        }}
      />
    </Tabs>
  );
}