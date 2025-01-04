import pandas as pd

def load_speed_cameras(file_path):
    try:
        # Lê o arquivo CSV com separador e terminador de linha especificados
        df = pd.read_csv(file_path, sep=';', lineterminator='\n', encoding='latin1', on_bad_lines='skip')
        
        # Remove colunas extras
        df = df.loc[:, ~df.columns.str.contains('^Unnamed')]
        
        # Remove caracteres de retorno de carro das colunas
        df.columns = df.columns.str.replace('\r', '')
        
        # Remove caracteres de retorno de carro dos dados
        df = df.apply(lambda x: x.str.replace('\r', '') if x.dtype == "object" else x)
        
        return df
    except Exception as e:
        print(f"Erro ao ler o arquivo CSV: {e}")
        return None

if __name__ == "__main__":
    file_path = 'C:\\Users\\Geraldo\\Documents\\Apps\\GoogleMap\\speed-camera-alert-app\\src\\fiscalizacao_eletronica_2024.csv'  # Substitua pelo caminho do seu arquivo CSV
    speed_cameras_df = load_speed_cameras(file_path)
    
    if speed_cameras_df is not None:
        print(speed_cameras_df.head())  # Exibe as primeiras linhas do DataFrame