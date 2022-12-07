"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetPlayerBirthdayReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Birthday_1 = require("./Birthday");
// @generated message type with reflection information, may provide speed optimized methods
class SetPlayerBirthdayReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SetPlayerBirthdayReq", [
            { no: 8, name: "birthday", kind: "message", T: () => Birthday_1.Birthday }
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
                case /* Birthday birthday */ 8:
                    message.birthday = Birthday_1.Birthday.internalBinaryRead(reader, reader.uint32(), options, message.birthday);
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
        /* Birthday birthday = 8; */
        if (message.birthday)
            Birthday_1.Birthday.internalBinaryWrite(message.birthday, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetPlayerBirthdayReq
 */
exports.SetPlayerBirthdayReq = new SetPlayerBirthdayReq$Type();
