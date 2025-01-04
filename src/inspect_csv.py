import csv

file_path = 'C:\\Users\\Geraldo\\Documents\\Apps\\GoogleMap\\speed-camera-alert-app\\src\\fiscalizacao_eletronica_2024.csv'

try:
    with open(file_path, 'r', encoding='latin1') as file:
        reader = csv.reader(file)
        for i, row in enumerate(reader):
            print(row)
            if i >= 10:  # Limite a impressão às primeiras 10 linhas
                break
except Exception as e:
    print(f"Erro ao abrir o arquivo: {e}")