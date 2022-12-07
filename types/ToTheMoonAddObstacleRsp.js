"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToTheMoonAddObstacleRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DynamicNodes_1 = require("./DynamicNodes");
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonAddObstacleRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ToTheMoonAddObstacleRsp", [
            { no: 7, name: "dynamic_nodes", kind: "message", T: () => DynamicNodes_1.DynamicNodes },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "query_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, queryId: 0 };
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
                case /* DynamicNodes dynamic_nodes */ 7:
                    message.dynamicNodes = DynamicNodes_1.DynamicNodes.internalBinaryRead(reader, reader.uint32(), options, message.dynamicNodes);
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* int32 query_id */ 9:
                    message.queryId = reader.int32();
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
        /* DynamicNodes dynamic_nodes = 7; */
        if (message.dynamicNodes)
            DynamicNodes_1.DynamicNodes.internalBinaryWrite(message.dynamicNodes, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* int32 query_id = 9; */
        if (message.queryId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.queryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ToTheMoonAddObstacleRsp
 */
exports.ToTheMoonAddObstacleRsp = new ToTheMoonAddObstacleRsp$Type();
