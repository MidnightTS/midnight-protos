"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorPointDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AnchorPointData_1 = require("./AnchorPointData");
// @generated message type with reflection information, may provide speed optimized methods
class AnchorPointDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AnchorPointDataNotify", [
            { no: 1, name: "next_usable_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "anchor_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AnchorPointData_1.AnchorPointData }
        ]);
    }
    create(value) {
        const message = { nextUsableTime: 0, anchorPointList: [] };
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
                case /* uint32 next_usable_time */ 1:
                    message.nextUsableTime = reader.uint32();
                    break;
                case /* repeated AnchorPointData anchor_point_list */ 11:
                    message.anchorPointList.push(AnchorPointData_1.AnchorPointData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 next_usable_time = 1; */
        if (message.nextUsableTime !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.nextUsableTime);
        /* repeated AnchorPointData anchor_point_list = 11; */
        for (let i = 0; i < message.anchorPointList.length; i++)
            AnchorPointData_1.AnchorPointData.internalBinaryWrite(message.anchorPointList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AnchorPointDataNotify
 */
exports.AnchorPointDataNotify = new AnchorPointDataNotify$Type();
