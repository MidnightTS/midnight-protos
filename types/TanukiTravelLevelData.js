"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TanukiTravelLevelData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TanukiTravelLevelData$Type extends runtime_5.MessageType {
    constructor() {
        super("TanukiTravelLevelData", [
            { no: 7, name: "is_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "route_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isFinish: false, isOpen: false, routeId: 0 };
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
                case /* bool is_finish */ 7:
                    message.isFinish = reader.bool();
                    break;
                case /* bool is_open */ 9:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 route_id */ 8:
                    message.routeId = reader.uint32();
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
        /* bool is_finish = 7; */
        if (message.isFinish !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isFinish);
        /* bool is_open = 9; */
        if (message.isOpen !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 route_id = 8; */
        if (message.routeId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.routeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TanukiTravelLevelData
 */
exports.TanukiTravelLevelData = new TanukiTravelLevelData$Type();
