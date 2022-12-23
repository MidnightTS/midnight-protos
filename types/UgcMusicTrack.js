"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UgcMusicTrack = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const UgcMusicNote_1 = require("./UgcMusicNote");
// @generated message type with reflection information, may provide speed optimized methods
class UgcMusicTrack$Type extends runtime_5.MessageType {
    constructor() {
        super("UgcMusicTrack", [
            { no: 6, name: "music_note_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UgcMusicNote_1.UgcMusicNote }
        ]);
    }
    create(value) {
        const message = { musicNoteList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated UgcMusicNote music_note_list */ 6:
                    message.musicNoteList.push(UgcMusicNote_1.UgcMusicNote.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated UgcMusicNote music_note_list = 6; */
        for (let i = 0; i < message.musicNoteList.length; i++)
            UgcMusicNote_1.UgcMusicNote.internalBinaryWrite(message.musicNoteList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UgcMusicTrack
 */
exports.UgcMusicTrack = new UgcMusicTrack$Type();
