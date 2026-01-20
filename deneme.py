import os

# Klasör yolu
folder_path = r"C:\Users\Berkan\Desktop\AI\dist\sessionId_6017"

# Klasördeki dosyaları listele ve yeniden adlandır
try:
    # Klasördeki tüm dosya ve klasörleri al
    items = os.listdir(folder_path)
    
    # Sadece dosyaları filtrele
    files = [item for item in items if os.path.isfile(os.path.join(folder_path, item))]
    
    print(f"'{folder_path}' klasöründeki dosyalar yeniden adlandırılıyor...\n")
    
    if files:
        renamed_count = 0
        for file in files:
            # Dosya adını ve uzantısını ayır
            name, extension = os.path.splitext(file)
            
            # Yeni dosya adı: isim + yildiz + uzantı
            new_name = f"{name}_yildiz{extension}"
            
            # Eski ve yeni dosya yolları
            old_path = os.path.join(folder_path, file)
            new_path = os.path.join(folder_path, new_name)
            
            # Dosyayı yeniden adlandır
            os.rename(old_path, new_path)
            print(f"'{file}' -> '{new_name}'")
            renamed_count += 1
        
        print(f"\nToplam {renamed_count} dosya yeniden adlandırıldı.")
    else:
        print("Klasörde dosya bulunamadı.")
        
except FileNotFoundError:
    print(f"Hata: '{folder_path}' klasörü bulunamadı.")
except PermissionError:
    print(f"Hata: '{folder_path}' klasörüne erişim izni yok.")
except Exception as e:
    print(f"Bir hata oluştu: {e}")
