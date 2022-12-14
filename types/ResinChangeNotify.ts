/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ResinChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ResinChangeNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        cur_buy_count?: number;
        next_add_timestamp?: number;
        cur_value?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cur_buy_count" in data && data.cur_buy_count != undefined) {
                this.cur_buy_count = data.cur_buy_count;
            }
            if ("next_add_timestamp" in data && data.next_add_timestamp != undefined) {
                this.next_add_timestamp = data.next_add_timestamp;
            }
            if ("cur_value" in data && data.cur_value != undefined) {
                this.cur_value = data.cur_value;
            }
        }
    }
    get cur_buy_count() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set cur_buy_count(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get next_add_timestamp() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set next_add_timestamp(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get cur_value() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set cur_value(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data: {
        cur_buy_count?: number;
        next_add_timestamp?: number;
        cur_value?: number;
    }): ResinChangeNotify {
        const message = new ResinChangeNotify({});
        if (data.cur_buy_count != null) {
            message.cur_buy_count = data.cur_buy_count;
        }
        if (data.next_add_timestamp != null) {
            message.next_add_timestamp = data.next_add_timestamp;
        }
        if (data.cur_value != null) {
            message.cur_value = data.cur_value;
        }
        return message;
    }
    toObject() {
        const data: {
            cur_buy_count?: number;
            next_add_timestamp?: number;
            cur_value?: number;
        } = {};
        if (this.cur_buy_count != null) {
            data.cur_buy_count = this.cur_buy_count;
        }
        if (this.next_add_timestamp != null) {
            data.next_add_timestamp = this.next_add_timestamp;
        }
        if (this.cur_value != null) {
            data.cur_value = this.cur_value;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cur_buy_count != 0)
            writer.writeUint32(11, this.cur_buy_count);
        if (this.next_add_timestamp != 0)
            writer.writeUint32(13, this.next_add_timestamp);
        if (this.cur_value != 0)
            writer.writeUint32(10, this.cur_value);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResinChangeNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ResinChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.cur_buy_count = reader.readUint32();
                    break;
                case 13:
                    message.next_add_timestamp = reader.readUint32();
                    break;
                case 10:
                    message.cur_value = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ResinChangeNotify {
        return ResinChangeNotify.deserialize(bytes);
    }
}
