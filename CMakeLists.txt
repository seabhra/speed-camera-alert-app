cmake_minimum_required(VERSION 3.20)
project(MyApp)

# Adicione suporte a multiplataforma
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Adicionar fontes
add_executable(MyApp src/main.cpp)

# Incluir bibliotecas multiplataforma específicas
if(${CMAKE_SYSTEM_NAME} MATCHES "Android")
    target_link_libraries(MyApp android log)
elseif(${CMAKE_SYSTEM_NAME} MATCHES "Darwin")
    target_link_libraries(MyApp "-framework Cocoa")
endif()