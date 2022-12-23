"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUgcReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const UgcMusicBriefInfo_1 = require("./UgcMusicBriefInfo");
const UgcMusicRecord_1 = require("./UgcMusicRecord");
const UgcType_1 = require("./UgcType");
// @generated message type with reflection information, may provide speed optimized methods
class SaveUgcReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SaveUgcReq", [
            { no: 3, name: "ugc_type", kind: "enum", T: () => ["UgcType", UgcType_1.UgcType, "UGC_TYPE_"] },
            { no: 11, name: "music_record", kind: "message", oneof: "record", T: () => UgcMusicRecord_1.UgcMusicRecord },
            { no: 260, name: "music_brief_info", kind: "message", oneof: "brief", T: () => UgcMusicBriefInfo_1.UgcMusicBriefInfo }
        ]);
    }
    create(value) {
        const message = { ugcType: 0, record: { oneofKind: undefined }, brief: { oneofKind: undefined } };
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
                case /* UgcType ugc_type */ 3:
                    message.ugcType = reader.int32();
                    break;
                case /* UgcMusicRecord music_record */ 11:
                    message.record = {
                        oneofKind: "musicRecord",
                        musicRecord: UgcMusicRecord_1.UgcMusicRecord.internalBinaryRead(reader, reader.uint32(), options, message.record.musicRecord)
                    };
                    break;
                case /* UgcMusicBriefInfo music_brief_info */ 260:
                    message.brief = {
                        oneofKind: "musicBriefInfo",
                        musicBriefInfo: UgcMusicBriefInfo_1.UgcMusicBriefInfo.internalBinaryRead(reader, reader.uint32(), options, message.brief.musicBriefInfo)
                    };
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
        /* UgcType ugc_type = 3; */
        if (message.ugcType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.ugcType);
        /* UgcMusicRecord music_record = 11; */
        if (message.record.oneofKind === "musicRecord")
            UgcMusicRecord_1.UgcMusicRecord.internalBinaryWrite(message.record.musicRecord, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* UgcMusicBriefInfo music_brief_info = 260; */
        if (message.brief.oneofKind === "musicBriefInfo")
            UgcMusicBriefInfo_1.UgcMusicBriefInfo.internalBinaryWrite(message.brief.musicBriefInfo, writer.tag(260, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SaveUgcReq
 */
exports.SaveUgcReq = new SaveUgcReq$Type();
