"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarExpeditionAllDataRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarExpeditionInfo_1 = require("./AvatarExpeditionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionAllDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarExpeditionAllDataRsp", [
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "open_expedition_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "expedition_info_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => AvatarExpeditionInfo_1.AvatarExpeditionInfo } },
            { no: 13, name: "expedition_count_limit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, openExpeditionList: [], expeditionInfoMap: {}, expeditionCountLimit: 0 };
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
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 open_expedition_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.openExpeditionList.push(reader.uint32());
                    else
                        message.openExpeditionList.push(reader.uint32());
                    break;
                case /* map<uint64, AvatarExpeditionInfo> expedition_info_map */ 1:
                    this.binaryReadMap1(message.expeditionInfoMap, reader, options);
                    break;
                case /* uint32 expedition_count_limit */ 13:
                    message.expeditionCountLimit = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = AvatarExpeditionInfo_1.AvatarExpeditionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarExpeditionAllDataRsp.expedition_info_map");
            }
        }
        map[key ?? "0"] = val ?? AvatarExpeditionInfo_1.AvatarExpeditionInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 open_expedition_list = 4; */
        if (message.openExpeditionList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.openExpeditionList.length; i++)
                writer.uint32(message.openExpeditionList[i]);
            writer.join();
        }
        /* map<uint64, AvatarExpeditionInfo> expedition_info_map = 1; */
        for (let k of Object.keys(message.expeditionInfoMap)) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint64(k);
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            AvatarExpeditionInfo_1.AvatarExpeditionInfo.internalBinaryWrite(message.expeditionInfoMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 expedition_count_limit = 13; */
        if (message.expeditionCountLimit !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.expeditionCountLimit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarExpeditionAllDataRsp
 */
exports.AvatarExpeditionAllDataRsp = new AvatarExpeditionAllDataRsp$Type();
