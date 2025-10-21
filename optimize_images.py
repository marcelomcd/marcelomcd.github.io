"""
Script para converter imagens para WebP e otimizar o portfólio
Requer: pip install Pillow
"""

from PIL import Image
import os

def convert_to_webp(input_path, output_path=None, quality=85):
    """
    Converte uma imagem para formato WebP
    
    Args:
        input_path: Caminho da imagem original
        output_path: Caminho de saída (opcional)
        quality: Qualidade da compressão (0-100)
    """
    try:
        # Abrir imagem
        img = Image.open(input_path)
        
        # Converter RGBA para RGB se necessário
        if img.mode in ('RGBA', 'LA'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[-1])
            img = background
        
        # Definir output path
        if output_path is None:
            output_path = os.path.splitext(input_path)[0] + '.webp'
        
        # Salvar como WebP
        img.save(output_path, 'WEBP', quality=quality, method=6)
        
        # Comparar tamanhos
        original_size = os.path.getsize(input_path)
        webp_size = os.path.getsize(output_path)
        reduction = ((original_size - webp_size) / original_size) * 100
        
        print(f"✓ Convertido: {os.path.basename(input_path)}")
        print(f"  Original: {original_size / 1024:.1f} KB")
        print(f"  WebP: {webp_size / 1024:.1f} KB")
        print(f"  Redução: {reduction:.1f}%\n")
        
        return output_path
        
    except Exception as e:
        print(f"✗ Erro ao converter {input_path}: {e}\n")
        return None

def optimize_portfolio_images(assets_dir='assets', quality=85):
    """
    Converte todas as imagens do diretório assets para WebP
    """
    if not os.path.exists(assets_dir):
        print(f"Diretório {assets_dir} não encontrado!")
        return
    
    # Extensões suportadas
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp')
    
    print("=" * 60)
    print("🖼️  OTIMIZAÇÃO DE IMAGENS DO PORTFÓLIO")
    print("=" * 60 + "\n")
    
    converted_count = 0
    
    # Percorrer arquivos no diretório
    for filename in os.listdir(assets_dir):
        filepath = os.path.join(assets_dir, filename)
        
        # Verificar se é imagem
        if os.path.isfile(filepath) and filename.lower().endswith(image_extensions):
            # Não converter se já existe versão WebP
            webp_path = os.path.splitext(filepath)[0] + '.webp'
            if os.path.exists(webp_path):
                print(f"⊘ Pulado (WebP já existe): {filename}\n")
                continue
            
            # Converter
            result = convert_to_webp(filepath, webp_path, quality)
            if result:
                converted_count += 1
    
    print("=" * 60)
    print(f"✓ Concluído! {converted_count} imagens convertidas para WebP")
    print("=" * 60 + "\n")
    
    print("📋 PRÓXIMOS PASSOS:")
    print("1. Verifique as imagens WebP geradas em", assets_dir)
    print("2. Teste a qualidade visual das imagens")
    print("3. Atualize o HTML para usar <picture> com fallback")
    print("4. Faça commit e push para o GitHub")

def create_optimized_thumbnail(input_path, max_width=800, quality=85):
    """
    Cria uma versão thumbnail otimizada da imagem
    """
    try:
        img = Image.open(input_path)
        
        # Calcular nova altura mantendo proporção
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        
        # Redimensionar
        img_resized = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # Converter RGBA para RGB se necessário
        if img_resized.mode in ('RGBA', 'LA'):
            background = Image.new('RGB', img_resized.size, (255, 255, 255))
            background.paste(img_resized, mask=img_resized.split()[-1])
            img_resized = background
        
        # Salvar
        output_path = os.path.splitext(input_path)[0] + '_thumb.webp'
        img_resized.save(output_path, 'WEBP', quality=quality, method=6)
        
        print(f"✓ Thumbnail criado: {os.path.basename(output_path)}")
        print(f"  Dimensões: {max_width}x{new_height}px")
        print(f"  Tamanho: {os.path.getsize(output_path) / 1024:.1f} KB\n")
        
        return output_path
        
    except Exception as e:
        print(f"✗ Erro ao criar thumbnail {input_path}: {e}\n")
        return None

if __name__ == '__main__':
    # Verificar se Pillow está instalado
    try:
        import PIL
        print(f"✓ Pillow {PIL.__version__} instalado\n")
    except ImportError:
        print("✗ Pillow não encontrado!")
        print("Execute: pip install Pillow\n")
        exit(1)
    
    # Menu
    print("Escolha uma opção:")
    print("1. Converter todas as imagens do diretório assets")
    print("2. Converter uma imagem específica")
    print("3. Criar thumbnails (800px largura)")
    
    choice = input("\nOpção (1-3): ").strip()
    
    if choice == '1':
        quality = input("Qualidade WebP (1-100, padrão 85): ").strip()
        quality = int(quality) if quality.isdigit() else 85
        optimize_portfolio_images('assets', quality)
    
    elif choice == '2':
        filepath = input("Caminho da imagem: ").strip()
        quality = input("Qualidade WebP (1-100, padrão 85): ").strip()
        quality = int(quality) if quality.isdigit() else 85
        
        if os.path.exists(filepath):
            convert_to_webp(filepath, quality=quality)
        else:
            print(f"✗ Arquivo não encontrado: {filepath}")
    
    elif choice == '3':
        assets_dir = 'assets'
        if not os.path.exists(assets_dir):
            print(f"✗ Diretório {assets_dir} não encontrado!")
            exit(1)
        
        image_extensions = ('.jpg', '.jpeg', '.png')
        for filename in os.listdir(assets_dir):
            filepath = os.path.join(assets_dir, filename)
            if os.path.isfile(filepath) and filename.lower().endswith(image_extensions):
                create_optimized_thumbnail(filepath)
    
    else:
        print("Opção inválida!")
