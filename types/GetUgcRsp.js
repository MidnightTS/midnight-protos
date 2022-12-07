"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUgcRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const UgcMusicBriefInfo_1 = require("./UgcMusicBriefInfo");
const UgcMusicRecord_1 = require("./UgcMusicRecord");
const UgcType_1 = require("./UgcType");
const RecordUsage_1 = require("./RecordUsage");
// @generated message type with reflection information, may provide speed optimized methods
class GetUgcRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetUgcRsp", [
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "ugc_record_usage", kind: "enum", T: () => ["RecordUsage", RecordUsage_1.RecordUsage, "RECORD_USAGE_"] },
            { no: 6, name: "ugc_type", kind: "enum", T: () => ["UgcType", UgcType_1.UgcType, "UGC_TYPE_"] },
            { no: 3, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "music_record", kind: "message", oneof: "record", T: () => UgcMusicRecord_1.UgcMusicRecord },
            { no: 1540, name: "music_brief_info", kind: "message", oneof: "brief", T: () => UgcMusicBriefInfo_1.UgcMusicBriefInfo }
        ]);
    }
    create(value) {
        const message = { retcode: 0, ugcRecordUsage: 0, ugcType: 0, ugcGuid: 0n, record: { oneofKind: undefined }, brief: { oneofKind: undefined } };
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
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* RecordUsage ugc_record_usage */ 5:
                    message.ugcRecordUsage = reader.int32();
                    break;
                case /* UgcType ugc_type */ 6:
                    message.ugcType = reader.int32();
                    break;
                case /* uint64 ugc_guid */ 3:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* UgcMusicRecord music_record */ 2:
                    message.record = {
                        oneofKind: "musicRecord",
                        musicRecord: UgcMusicRecord_1.UgcMusicRecord.internalBinaryRead(reader, reader.uint32(), options, message.record.musicRecord)
                    };
                    break;
                case /* UgcMusicBriefInfo music_brief_info */ 1540:
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
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* RecordUsage ugc_record_usage = 5; */
        if (message.ugcRecordUsage !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.ugcRecordUsage);
        /* UgcType ugc_type = 6; */
        if (message.ugcType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.ugcType);
        /* uint64 ugc_guid = 3; */
        if (message.ugcGuid !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* UgcMusicRecord music_record = 2; */
        if (message.record.oneofKind === "musicRecord")
            UgcMusicRecord_1.UgcMusicRecord.internalBinaryWrite(message.record.musicRecord, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* UgcMusicBriefInfo music_brief_info = 1540; */
        if (message.brief.oneofKind === "musicBriefInfo")
            UgcMusicBriefInfo_1.UgcMusicBriefInfo.internalBinaryWrite(message.brief.musicBriefInfo, writer.tag(1540, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetUgcRsp
 */
exports.GetUgcRsp = new GetUgcRsp$Type();
