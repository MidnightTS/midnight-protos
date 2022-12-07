"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeGetQueueDataRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForgeQueueData_1 = require("./ForgeQueueData");
// @generated message type with reflection information, may provide speed optimized methods
class ForgeGetQueueDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ForgeGetQueueDataRsp", [
            { no: 4, name: "max_queue_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "forge_queue_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => ForgeQueueData_1.ForgeQueueData } },
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { maxQueueNum: 0, forgeQueueMap: {}, retcode: 0 };
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
                case /* uint32 max_queue_num */ 4:
                    message.maxQueueNum = reader.uint32();
                    break;
                case /* map<uint32, ForgeQueueData> forge_queue_map */ 9:
                    this.binaryReadMap9(message.forgeQueueMap, reader, options);
                    break;
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
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
                    val = ForgeQueueData_1.ForgeQueueData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ForgeGetQueueDataRsp.forge_queue_map");
            }
        }
        map[key ?? 0] = val ?? ForgeQueueData_1.ForgeQueueData.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 max_queue_num = 4; */
        if (message.maxQueueNum !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.maxQueueNum);
        /* map<uint32, ForgeQueueData> forge_queue_map = 9; */
        for (let k of Object.keys(message.forgeQueueMap)) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            ForgeQueueData_1.ForgeQueueData.internalBinaryWrite(message.forgeQueueMap[k], writer, options);
            writer.join().join();
        }
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeGetQueueDataRsp
 */
exports.ForgeGetQueueDataRsp = new ForgeGetQueueDataRsp$Type();
