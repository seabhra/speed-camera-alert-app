import pandas as pd
import os

def convert_csv_to_json(csv_file_path, json_file_path):
    try:
        # Verifica se o arquivo CSV existe
        if not os.path.isfile(csv_file_path):
            print(f"Arquivo CSV não encontrado: {csv_file_path}")
            return
        
        # Lê o arquivo CSV
        df = pd.read_csv(csv_file_path, sep=';', lineterminator='\n', encoding='latin1', on_bad_lines='skip')
        
        # Verifica se o DataFrame está vazio
        if df.empty:
            print(f"O arquivo CSV está vazio ou não pôde ser lido: {csv_file_path}")
            # Adicione uma ação adicional aqui, se necessário
            return
        
        # Converte para JSON
        df.to_json(json_file_path, orient='records', lines=True)
        
        print(f"Arquivo JSON salvo em: {json_file_path}")
    except Exception as e:
        print(f"Erro ao converter CSV para JSON: {e}")

if __name__ == "__main__":
    csv_file_path = 'C:\\Users\\Geraldo\\Documents\\Apps\\GoogleMap\\speed-camera-alert-app\\src\\fiscalizacao_eletronica_2024.csv'  # Substitua pelo caminho do seu arquivo CSV
    json_file_path = 'C:\\Users\\Geraldo\\Documents\\Apps\\GoogleMap\\speed-camera-alert-app\\src\\fiscalizacao_eletronica_2024.json'  # Caminho para salvar o arquivo JSON
    convert_csv_to_json(csv_file_path, json_file_path)