"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicGameActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MusicGameRecord_1 = require("./MusicGameRecord");
const UgcMusicBriefInfo_1 = require("./UgcMusicBriefInfo");
// @generated message type with reflection information, may provide speed optimized methods
class MusicGameActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MusicGameActivityDetailInfo", [
            { no: 2, name: "Unk3300_AAGCDCOIPJM", kind: "message", jsonName: "Unk3300AAGCDCOIPJM", repeat: 1 /*RepeatType.PACKED*/, T: () => UgcMusicBriefInfo_1.UgcMusicBriefInfo },
            { no: 12, name: "Unk3300_OKHAACGHMAP", kind: "message", jsonName: "Unk3300OKHAACGHMAP", repeat: 1 /*RepeatType.PACKED*/, T: () => UgcMusicBriefInfo_1.UgcMusicBriefInfo },
            { no: 9, name: "music_game_record_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => MusicGameRecord_1.MusicGameRecord } }
        ]);
    }
    create(value) {
        const message = { unk3300AAGCDCOIPJM: [], unk3300OKHAACGHMAP: [], musicGameRecordMap: {} };
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
                case /* repeated UgcMusicBriefInfo Unk3300_AAGCDCOIPJM = 2 [json_name = "Unk3300AAGCDCOIPJM"];*/ 2:
                    message.unk3300AAGCDCOIPJM.push(UgcMusicBriefInfo_1.UgcMusicBriefInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated UgcMusicBriefInfo Unk3300_OKHAACGHMAP = 12 [json_name = "Unk3300OKHAACGHMAP"];*/ 12:
                    message.unk3300OKHAACGHMAP.push(UgcMusicBriefInfo_1.UgcMusicBriefInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* map<uint32, MusicGameRecord> music_game_record_map */ 9:
                    this.binaryReadMap9(message.musicGameRecordMap, reader, options);
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
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = MusicGameRecord_1.MusicGameRecord.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field MusicGameActivityDetailInfo.music_game_record_map");
            }
        }
        map[key ?? 0] = val ?? MusicGameRecord_1.MusicGameRecord.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated UgcMusicBriefInfo Unk3300_AAGCDCOIPJM = 2 [json_name = "Unk3300AAGCDCOIPJM"]; */
        for (let i = 0; i < message.unk3300AAGCDCOIPJM.length; i++)
            UgcMusicBriefInfo_1.UgcMusicBriefInfo.internalBinaryWrite(message.unk3300AAGCDCOIPJM[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated UgcMusicBriefInfo Unk3300_OKHAACGHMAP = 12 [json_name = "Unk3300OKHAACGHMAP"]; */
        for (let i = 0; i < message.unk3300OKHAACGHMAP.length; i++)
            UgcMusicBriefInfo_1.UgcMusicBriefInfo.internalBinaryWrite(message.unk3300OKHAACGHMAP[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, MusicGameRecord> music_game_record_map = 9; */
        for (let k of Object.keys(message.musicGameRecordMap)) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            MusicGameRecord_1.MusicGameRecord.internalBinaryWrite(message.musicGameRecordMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MusicGameActivityDetailInfo
 */
exports.MusicGameActivityDetailInfo = new MusicGameActivityDetailInfo$Type();
