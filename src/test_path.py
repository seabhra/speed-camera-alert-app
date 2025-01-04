# filepath: /speed-camera-alert-app/src/test_path.py

file_path = 'C:\\Users\\Geraldo\\Documents\\Apps\\GoogleMap\\speed-camera-alert-app\\src\\fiscalizacao_eletronica_2014.csv'

try:
    with open(file_path, 'r') as file:
        print("Arquivo aberto com sucesso!")
except Exception as e:
    print(f"Erro ao abrir o arquivo: {e}")