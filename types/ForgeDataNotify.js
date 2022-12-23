"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForgeQueueData_1 = require("./ForgeQueueData");
// @generated message type with reflection information, may provide speed optimized methods
class ForgeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ForgeDataNotify", [
            { no: 13, name: "forge_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "forge_queue_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => ForgeQueueData_1.ForgeQueueData } },
            { no: 11, name: "max_queue_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { forgeIdList: [], forgeQueueMap: {}, maxQueueNum: 0 };
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
                case /* repeated uint32 forge_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.forgeIdList.push(reader.uint32());
                    else
                        message.forgeIdList.push(reader.uint32());
                    break;
                case /* map<uint32, ForgeQueueData> forge_queue_map */ 8:
                    this.binaryReadMap8(message.forgeQueueMap, reader, options);
                    break;
                case /* uint32 max_queue_num */ 11:
                    message.maxQueueNum = reader.uint32();
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
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = ForgeQueueData_1.ForgeQueueData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ForgeDataNotify.forge_queue_map");
            }
        }
        map[key ?? 0] = val ?? ForgeQueueData_1.ForgeQueueData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 forge_id_list = 13; */
        if (message.forgeIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.forgeIdList.length; i++)
                writer.uint32(message.forgeIdList[i]);
            writer.join();
        }
        /* map<uint32, ForgeQueueData> forge_queue_map = 8; */
        for (let k of Object.keys(message.forgeQueueMap)) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            ForgeQueueData_1.ForgeQueueData.internalBinaryWrite(message.forgeQueueMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 max_queue_num = 11; */
        if (message.maxQueueNum !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.maxQueueNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeDataNotify
 */
exports.ForgeDataNotify = new ForgeDataNotify$Type();
