"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeQueueDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForgeQueueData_1 = require("./ForgeQueueData");
// @generated message type with reflection information, may provide speed optimized methods
class ForgeQueueDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ForgeQueueDataNotify", [
            { no: 1, name: "forge_queue_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => ForgeQueueData_1.ForgeQueueData } },
            { no: 15, name: "removed_forge_queue_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { forgeQueueMap: {}, removedForgeQueueList: [] };
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
                case /* map<uint32, ForgeQueueData> forge_queue_map */ 1:
                    this.binaryReadMap1(message.forgeQueueMap, reader, options);
                    break;
                case /* repeated uint32 removed_forge_queue_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.removedForgeQueueList.push(reader.uint32());
                    else
                        message.removedForgeQueueList.push(reader.uint32());
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
                    key = reader.uint32();
                    break;
                case 2:
                    val = ForgeQueueData_1.ForgeQueueData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ForgeQueueDataNotify.forge_queue_map");
            }
        }
        map[key ?? 0] = val ?? ForgeQueueData_1.ForgeQueueData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, ForgeQueueData> forge_queue_map = 1; */
        for (let k of Object.keys(message.forgeQueueMap)) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            ForgeQueueData_1.ForgeQueueData.internalBinaryWrite(message.forgeQueueMap[k], writer, options);
            writer.join().join();
        }
        /* repeated uint32 removed_forge_queue_list = 15; */
        if (message.removedForgeQueueList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.removedForgeQueueList.length; i++)
                writer.uint32(message.removedForgeQueueList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeQueueDataNotify
 */
exports.ForgeQueueDataNotify = new ForgeQueueDataNotify$Type();
