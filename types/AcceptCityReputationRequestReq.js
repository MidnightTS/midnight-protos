"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptCityReputationRequestReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AcceptCityReputationRequestReq$Type extends runtime_5.MessageType {
    constructor() {
        super("AcceptCityReputationRequestReq", [
            { no: 14, name: "city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "request_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cityId: 0, requestId: 0 };
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
                case /* uint32 city_id */ 14:
                    message.cityId = reader.uint32();
                    break;
                case /* uint32 request_id */ 8:
                    message.requestId = reader.uint32();
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
        /* uint32 city_id = 14; */
        if (message.cityId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.cityId);
        /* uint32 request_id = 8; */
        if (message.requestId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.requestId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AcceptCityReputationRequestReq
 */
exports.AcceptCityReputationRequestReq = new AcceptCityReputationRequestReq$Type();
