"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeResourceNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeResource_1 = require("./HomeResource");
// @generated message type with reflection information, may provide speed optimized methods
class HomeResourceNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeResourceNotify", [
            { no: 7, name: "fetter_exp", kind: "message", T: () => HomeResource_1.HomeResource },
            { no: 5, name: "home_coin", kind: "message", T: () => HomeResource_1.HomeResource }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* HomeResource fetter_exp */ 7:
                    message.fetterExp = HomeResource_1.HomeResource.internalBinaryRead(reader, reader.uint32(), options, message.fetterExp);
                    break;
                case /* HomeResource home_coin */ 5:
                    message.homeCoin = HomeResource_1.HomeResource.internalBinaryRead(reader, reader.uint32(), options, message.homeCoin);
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
        /* HomeResource fetter_exp = 7; */
        if (message.fetterExp)
            HomeResource_1.HomeResource.internalBinaryWrite(message.fetterExp, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HomeResource home_coin = 5; */
        if (message.homeCoin)
            HomeResource_1.HomeResource.internalBinaryWrite(message.homeCoin, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeResourceNotify
 */
exports.HomeResourceNotify = new HomeResourceNotify$Type();
