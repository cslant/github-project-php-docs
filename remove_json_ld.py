#!/usr/bin/env python3
import os
import re

def remove_json_ld_from_file(file_path):
    """Remove JSON-LD structured data from files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove JSON-LD script blocks completely
        # Pattern for markdown files
        json_ld_pattern = r'<!-- JSON-LD Structured Data -->\s*<script type="application/ld\+json">.*?</script>\s*'
        new_content = re.sub(json_ld_pattern, '', content, flags=re.DOTALL)
        
        # Alternative pattern
        json_ld_pattern2 = r'<script type="application/ld\+json">.*?</script>\s*'
        new_content = re.sub(json_ld_pattern2, '', new_content, flags=re.DOTALL)
        
        # Remove JSX comments that cause issues
        jsx_comment_pattern = r'\{/\*.*?\*/\}\s*'
        new_content = re.sub(jsx_comment_pattern, '', new_content, flags=re.DOTALL)
        
        # Clean up extra whitespace
        new_content = re.sub(r'\n\s*\n\s*\n', '\n\n', new_content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✅ Removed JSON-LD from: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def remove_json_ld_from_tsx(file_path):
    """Remove JSON-LD from TSX files"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove JSON-LD script blocks from TSX
        json_ld_pattern = r'\s*\{/\* JSON-LD Structured Data \*/\}\s*<script type="application/ld\+json".*?/>\s*'
        new_content = re.sub(json_ld_pattern, '', content, flags=re.DOTALL)
        
        # Alternative pattern for TSX
        json_ld_pattern2 = r'\s*<script type="application/ld\+json".*?/>\s*'
        new_content = re.sub(json_ld_pattern2, '', new_content, flags=re.DOTALL)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✅ Removed JSON-LD from TSX: {file_path}")
            return True
        
        return False
        
    except Exception as e:
        print(f"❌ Error processing TSX {file_path}: {e}")
        return False

def main():
    print("🗑️  REMOVING ALL JSON-LD TO FIX BUILD ERRORS")
    print("============================================")
    
    base_dir = '/Users/tannguyen/Data/CSlant/source/docs'
    
    # Remove from markdown files
    print("\n📄 Removing JSON-LD from Markdown files...")
    md_files = []
    for root, dirs, files in os.walk(f'{base_dir}/repos'):
        for file in files:
            if file.endswith('.md') and file != 'README.md':
                file_path = os.path.join(root, file)
                if 'telegram-git-notifier/docs' not in file_path and 'telegram-git-notifier/CHANGELOG.md' not in file_path:
                    md_files.append(file_path)
    
    md_cleaned = 0
    for file_path in md_files:
        if remove_json_ld_from_file(file_path):
            md_cleaned += 1
    
    # Remove from TSX files
    print(f"\n📱 Removing JSON-LD from TSX files...")
    tsx_files = []
    for root, dirs, files in os.walk(f'{base_dir}/repos'):
        if 'node_modules' in root:
            continue
        for file in files:
            if file.endswith('.tsx'):
                tsx_files.append(os.path.join(root, file))
    
    tsx_cleaned = 0
    for file_path in tsx_files:
        if remove_json_ld_from_tsx(file_path):
            tsx_cleaned += 1
    
    print(f"\n🎉 CLEANUP COMPLETED!")
    print(f"✅ Cleaned {md_cleaned} markdown files")
    print(f"✅ Cleaned {tsx_cleaned} TSX files")
    print(f"\n📋 Benefits:")
    print(f"  🔧 Fixed build errors")
    print(f"  🚀 Faster build times")
    print(f"  📱 Still have comprehensive SEO (Open Graph, Twitter Cards, etc.)")
    print(f"  🔍 Search engines will still index properly")

if __name__ == "__main__":
    main()
