import React, { useState } from 'react';
import { Editor } from 'novel';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NovelEditorProps {
  initialContent: string;
  onSave: (title: string, slug: string, content: string) => Promise<void>;
}

const NovelEditor: React.FC<NovelEditorProps> = ({ initialContent, onSave }) => {
  const [content, setContent] = useState(initialContent);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');

  const handleSave = async () => {
    await onSave(title, slug, content);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="enter-post-slug"
        />
      </div>
      <Editor
        defaultValue={content}
        onUpdate={({ editor }) => {
          setContent(editor.getHTML());
        }}
      />
      <Button onClick={handleSave}>Save Post</Button>
    </div>
  );
};

export default NovelEditor;
