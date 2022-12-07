"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUgcBriefInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const UgcMusicBriefInfo_1 = require("./UgcMusicBriefInfo");
const UgcType_1 = require("./UgcType");
// @generated message type with reflection information, may provide speed optimized methods
class GetUgcBriefInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetUgcBriefInfoRsp", [
            { no: 3, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "ugc_type", kind: "enum", T: () => ["UgcType", UgcType_1.UgcType, "UGC_TYPE_"] },
            { no: 7, name: "music_brief_info", kind: "message", oneof: "brief", T: () => UgcMusicBriefInfo_1.UgcMusicBriefInfo }
        ]);
    }
    create(value) {
        const message = { ugcGuid: 0n, retcode: 0, ugcType: 0, brief: { oneofKind: undefined } };
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
                case /* uint64 ugc_guid */ 3:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* UgcType ugc_type */ 9:
                    message.ugcType = reader.int32();
                    break;
                case /* UgcMusicBriefInfo music_brief_info */ 7:
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
        /* uint64 ugc_guid = 3; */
        if (message.ugcGuid !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.ugcGuid);
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.retcode);
        /* UgcType ugc_type = 9; */
        if (message.ugcType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.ugcType);
        /* UgcMusicBriefInfo music_brief_info = 7; */
        if (message.brief.oneofKind === "musicBriefInfo")
            UgcMusicBriefInfo_1.UgcMusicBriefInfo.internalBinaryWrite(message.brief.musicBriefInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetUgcBriefInfoRsp
 */
exports.GetUgcBriefInfoRsp = new GetUgcBriefInfoRsp$Type();
