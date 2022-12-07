"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlessingAcceptAllGivePicRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BlessingAcceptAllGivePicRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("BlessingAcceptAllGivePicRsp", [
            { no: 11, name: "accept_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "accept_pic_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { acceptIndexList: [], retcode: 0, acceptPicNumMap: {} };
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
                case /* repeated uint32 accept_index_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.acceptIndexList.push(reader.uint32());
                    else
                        message.acceptIndexList.push(reader.uint32());
                    break;
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* map<uint32, uint32> accept_pic_num_map */ 15:
                    this.binaryReadMap15(message.acceptPicNumMap, reader, options);
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
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field BlessingAcceptAllGivePicRsp.accept_pic_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 accept_index_list = 11; */
        if (message.acceptIndexList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.acceptIndexList.length; i++)
                writer.uint32(message.acceptIndexList[i]);
            writer.join();
        }
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        /* map<uint32, uint32> accept_pic_num_map = 15; */
        for (let k of Object.keys(message.acceptPicNumMap))
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.acceptPicNumMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlessingAcceptAllGivePicRsp
 */
exports.BlessingAcceptAllGivePicRsp = new BlessingAcceptAllGivePicRsp$Type();
